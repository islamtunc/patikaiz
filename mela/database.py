# Bismillahirrahmanirrahim
# Elhamdulillahirabbulalemin
# Esselatu vesselamu ala rasulina Muhammedin
# SuphanAllah ve Bihamdihi Velhamdulillah kesira
# Allah u Ekber Velillahil Hamd
# La ilahe ill ALLAH

"""
Veritabanı Yönetim Modülü
Profil satış işletmesi için SQLite veritabanı işlemleri
"""
import sqlite3
from datetime import datetime
from typing import Optional, List, Dict, Any


class Database:
    """Veritabanı sınıfı - Tüm veri işlemlerini yönetir"""
    
    def __init__(self, db_path: str = "profil_muhasebe.db"):
        self.db_path = db_path
        self.init_database()
    
    def connect(self) -> sqlite3.Connection:
        """Veritabanı bağlantısı oluştur"""
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        return conn
    
    def init_database(self):
        """Veritabanı tablolarını oluştur"""
        with self.connect() as conn:
            cursor = conn.cursor()
            
            # Cari (Müşteri) Tablosu
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS cariler (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    ad TEXT NOT NULL,
                    telefon TEXT,
                    adres TEXT,
                    borc REAL DEFAULT 0,
                    alacak REAL DEFAULT 0,
                    notlar TEXT,
                    tarih TEXT DEFAULT CURRENT_TIMESTAMP
                )
            """)
            
            # Veresiye İşlemleri Tablosu
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS veresiye_islemleri (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    cari_id INTEGER NOT NULL,
                    urun_adi TEXT NOT NULL,
                    miktar INTEGER DEFAULT 1,
                    birim_fiyat REAL NOT NULL,
                    toplam REAL NOT NULL,
                    odendi REAL DEFAULT 0,
                    kalan REAL NOT NULL,
                    durum TEXT DEFAULT 'beklemede',
                    tarih TEXT DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (cari_id) REFERENCES cariler(id)
                )
            """)
            
            # Muhasebe Kayıtları Tablosu
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS muhasebe_kayitlari (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    turu TEXT NOT NULL,  -- 'gelir' veya 'gider'
                    kategori TEXT NOT NULL,
                    tutar REAL NOT NULL,
                    aciklama TEXT,
                    tarih TEXT DEFAULT CURRENT_TIMESTAMP
                )
            """)
            
            # Profil Stok Tablosu
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS stok (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    urun_adi TEXT NOT NULL,
                    birim TEXT NOT NULL,
                    miktar INTEGER DEFAULT 0,
                    birim_fiyat REAL DEFAULT 0,
                    son_guncelleme TEXT DEFAULT CURRENT_TIMESTAMP
                )
            """)
            
            conn.commit()
    
    # ==================== CARİ İŞLEMLERİ ====================
    
    def cari_ekle(self, ad: str, telefon: str = "", adres: str = "", notlar: str = "") -> int:
        """Yeni cari ekle"""
        with self.connect() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO cariler (ad, telefon, adres, notlar)
                VALUES (?, ?, ?, ?)
            """, (ad, telefon, adres, notlar))
            conn.commit()
            return cursor.lastrowid
    
    def cari_listele(self) -> List[Dict]:
        """Tüm carileri listele"""
        with self.connect() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM cariler ORDER BY ad")
            return [dict(row) for row in cursor.fetchall()]
    
    def cari_guncelle(self, cari_id: int, ad: str = None, telefon: str = None, 
                      adres: str = None, notlar: str = None):
        """Cari bilgilerini güncelle"""
        with self.connect() as conn:
            cursor = conn.cursor()
            if ad:
                cursor.execute("UPDATE cariler SET ad = ? WHERE id = ?", (ad, cari_id))
            if telefon is not None:
                cursor.execute("UPDATE cariler SET telefon = ? WHERE id = ?", (telefon, cari_id))
            if adres is not None:
                cursor.execute("UPDATE cariler SET adres = ? WHERE id = ?", (adres, cari_id))
            if notlar is not None:
                cursor.execute("UPDATE cariler SET notlar = ? WHERE id = ?", (notlar, cari_id))
            conn.commit()
    
    def cari_sil(self, cari_id: int):
        """Cari sil"""
        with self.connect() as conn:
            cursor = conn.cursor()
            cursor.execute("DELETE FROM veresiye_islemleri WHERE cari_id = ?", (cari_id,))
            cursor.execute("DELETE FROM cariler WHERE id = ?", (cari_id,))
            conn.commit()
    
    def cari_bul(self, cari_id: int) -> Optional[Dict]:
        """ID ile cari bul"""
        with self.connect() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM cariler WHERE id = ?", (cari_id,))
            row = cursor.fetchone()
            return dict(row) if row else None
    
    # ==================== VERESİYE İŞLEMLERİ ====================
    
    def veresiye_ekle(self, cari_id: int, urun_adi: str, miktar: int, 
                      birim_fiyat: float) -> int:
        """Yeni veresiye kaydı ekle"""
        toplam = miktar * birim_fiyat
        with self.connect() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO veresiye_islemleri 
                (cari_id, urun_adi, miktar, birim_fiyat, toplam, kalan)
                VALUES (?, ?, ?, ?, ?, ?)
            """, (cari_id, urun_adi, miktar, birim_fiyat, toplam, toplam))
            conn.commit()
            
            # Cari borcunu güncelle
            cursor.execute("""
                UPDATE cariler SET borc = borc + ? WHERE id = ?
            """, (toplam, cari_id))
            conn.commit()
            return cursor.lastrowid
    
    def veresiye_ode(self, islem_id: int, tutar: float):
        """Veresiye ödemesi yap"""
        with self.connect() as conn:
            cursor = conn.cursor()
            
            # İşlem bilgilerini al
            cursor.execute("SELECT cari_id, kalan FROM veresiye_islemleri WHERE id = ?", 
                          (islem_id,))
            row = cursor.fetchone()
            if not row:
                return False
            
            cari_id, kalan = row['cari_id'], row['kalan']
            
            # Ödeme durumunu güncelle
            yeni_kalan = max(0, kalan - tutar)
            durum = "odendi" if yeni_kalan == 0 else "kismi_odendi"
            
            cursor.execute("""
                UPDATE veresiye_islemleri 
                SET odendi = odendi + ?, kalan = ?, durum = ?
                WHERE id = ?
            """, (tutar, yeni_kalan, durum, islem_id))
            
            # Cari borcunu güncelle
            cursor.execute("""
                UPDATE cariler SET borc = borc - ?, alacak = alacak + ? 
                WHERE id = ?
            """, (tutar, tutar, cari_id))
            conn.commit()
            return True
    
    def veresiye_listele(self, cari_id: int = None) -> List[Dict]:
        """Veresiye kayıtlarını listele"""
        with self.connect() as conn:
            cursor = conn.cursor()
            if cari_id:
                cursor.execute("""
                    SELECT v.*, c.ad as cari_ad 
                    FROM veresiye_islemleri v
                    JOIN cariler c ON v.cari_id = c.id
                    WHERE v.cari_id = ?
                    ORDER BY v.tarih DESC
                """, (cari_id,))
            else:
                cursor.execute("""
                    SELECT v.*, c.ad as cari_ad 
                    FROM veresiye_islemleri v
                    JOIN cariler c ON v.cari_id = c.id
                    ORDER BY v.tarih DESC
                """)
            return [dict(row) for row in cursor.fetchall()]
    
    # ==================== MUHASEBE İŞLEMLERİ ====================
    
    def muhasebe_ekle(self, turu: str, kategori: str, tutar: float, 
                      aciklama: str = "") -> int:
        """Muhasebe kaydı ekle"""
        with self.connect() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO muhasebe_kayitlari (turu, kategori, tutar, aciklama)
                VALUES (?, ?, ?, ?)
            """, (turu, kategori, tutar, aciklama))
            conn.commit()
            return cursor.lastrowid
    
    def muhasebe_listele(self, turu: str = None, 
                        baslangic: str = None, 
                        bitis: str = None) -> List[Dict]:
        """Muhasebe kayıtlarını listele"""
        with self.connect() as conn:
            cursor = conn.cursor()
            query = "SELECT * FROM muhasebe_kayitlari WHERE 1=1"
            params = []
            
            if turu:
                query += " AND turu = ?"
                params.append(turu)
            if baslangic:
                query += " AND tarih >= ?"
                params.append(baslangic)
            if bitis:
                query += " AND tarih <= ?"
                params.append(bitis)
            
            query += " ORDER BY tarih DESC"
            cursor.execute(query, params)
            return [dict(row) for row in cursor.fetchall()]
    
    def muhasebe_rapor(self, baslangic: str = None, bitis: str = None) -> Dict:
        """Muhasebe raporu al"""
        with self.connect() as conn:
            cursor = conn.cursor()
            query = "SELECT turu, SUM(tutar) as toplam FROM muhasebe_kayitlari WHERE 1=1"
            params = []
            
            if baslangic:
                query += " AND tarih >= ?"
                params.append(baslangic)
            if bitis:
                query += " AND tarih <= ?"
                params.append(bitis)
            
            query += " GROUP BY turu"
            cursor.execute(query, params)
            
            sonuc = {"gelir": 0, "gider": 0}
            for row in cursor.fetchall():
                sonuc[row['turu']] = row['toplam']
            
            sonuc["bakiye"] = sonuc["gelir"] - sonuc["gider"]
            return sonuc
    
    # ==================== STOK İŞLEMLERİ ====================
    
    def stok_ekle(self, urun_adi: str, birim: str, miktar: int, 
                  birim_fiyat: float) -> int:
        """Stok ekle"""
        with self.connect() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO stok (urun_adi, birim, miktar, birim_fiyat)
                VALUES (?, ?, ?, ?)
            """, (urun_adi, birim, miktar, birim_fiyat))
            conn.commit()
            return cursor.lastrowid
    
    def stok_guncelle(self, stok_id: int, miktar: int = None, 
                      birim_fiyat: float = None):
        """Stok güncelle"""
        with self.connect() as conn:
            cursor = conn.cursor()
            if miktar is not None:
                cursor.execute("""
                    UPDATE stok SET miktar = ?, son_guncelleme = CURRENT_TIMESTAMP 
                    WHERE id = ?
                """, (miktar, stok_id))
            if birim_fiyat is not None:
                cursor.execute("""
                    UPDATE stok SET birim_fiyat = ?, son_guncelleme = CURRENT_TIMESTAMP 
                    WHERE id = ?
                """, (birim_fiyat, stok_id))
            conn.commit()
    
    def stok_listele(self) -> List[Dict]:
        """Stokları listele"""
        with self.connect() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM stok ORDER BY urun_adi")
            return [dict(row) for row in cursor.fetchall()]


# Test
if __name__ == "__main__":
    db = Database()
    print("Veritabanı başarıyla oluşturuldu!")