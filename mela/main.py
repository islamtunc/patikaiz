# Bismillahirrahmanirrahim
# Elhamdulillahirabbulalemin
# Esselatu vesselamu ala rasulina Muhammedin
# SuphanAllah ve Bihamdihi Velhamdulillah kesira
# Allah u Ekber Velillahil Hamd
# La ilahe ill ALLAH

"""
Ana Uygulama - Profil Satış Muhasebe Programı
Tkinter GUI ile cari, satış ve muhasebe yönetimi
"""
import tkinter as tk
from tkinter import ttk, messagebox
from datetime import datetime
import database


class ProfilMuhasebeApp:
    """Ana uygulama sınıfı"""
    
    def __init__(self, root):
        self.root = root
        self.root.title("EmirOğlu Demir Çelik- Cari ve Satış Yönetimi")
        self.root.geometry("1200x700")
        self.root.configure(bg="#f0f0f0")
        
        self.db = database.Database()
        
        self.setup_styles()
        self.create_header()
        self.create_tabs()  # Sekmeli yapı - tek pencerede tüm modüller
        self.create_status_bar()
        
        # İlk sekme
        self.notebook.select(0)
    
    def setup_styles(self):
        """GUI stillerini ayarla"""
        self.style = ttk.Style()
        self.style.theme_use("clam")
        
        # Ana renkler
        self.bg_color = "#f0f0f0"
        self.header_bg = "#2c3e50"
        self.accent_color = "#3498db"
        self.success_color = "#27ae60"
        self.warning_color = "#f39c12"
        self.danger_color = "#e74c3c"
        
        self.style.configure("TNotebook", background=self.bg_color)
        self.style.configure("TNotebook.Tab", background="#ddd", padding=[10, 5])
        self.style.map("TNotebook.Tab", background=[("selected", self.accent_color)])
        
        # Buton stilleri
        self.style.configure("Primary.TButton", background=self.accent_color, foreground="white")
        self.style.configure("Success.TButton", background=self.success_color, foreground="white")
        self.style.configure("Danger.TButton", background=self.danger_color, foreground="white")
    
    def create_header(self):
        """Üst header oluştur"""
        header = tk.Frame(self.root, bg=self.header_bg, height=60)
        header.pack(fill=tk.X)
        header.pack_propagate(False)
        
        # Başlık
        title = tk.Label(header, text="🏪 EmirOğlu Demir Çelik", 
                       font=("Arial", 18, "bold"), bg=self.header_bg, fg="white")
        title.pack(side=tk.LEFT, padx=20)
        
        # Tarih saat
        self.date_label = tk.Label(header, text="", font=("Arial", 10), 
                                   bg=self.header_bg, fg="#ccc")
        self.date_label.pack(side=tk.RIGHT, padx=20)
        self.update_date()
    
    def update_date(self):
        """Tarih ve saati güncelle"""
        now = datetime.now().strftime("%d.%m.%Y %H:%M")
        self.date_label.config(text=now)
        self.root.after(1000, self.update_date)
    
    def create_menu(self):
        """Menü oluştur - Artık sekmeler var, basit başlık yeterli"""
        menu_frame = tk.Frame(self.root, bg="#ddd", height=40)
        menu_frame.pack(fill=tk.X)
        menu_frame.pack_propagate(False)
        
        # Sekmeler artık ana navigasyon, sadece basit bir ipucu göster
        tk.Label(menu_frame, text="📌 Sekmeler arasında geçiş için yukarıdaki sekmelere tıklayın", 
                font=("Arial", 10), bg="#ddd", fg="#666").pack(pady=10)
    
    def create_tabs(self):
        """Sekmeli (Notebook) yapı oluştur - Tüm modüller tek pencerede"""
        self.notebook = ttk.Notebook(self.root)
        self.notebook.pack(fill=tk.BOTH, expand=True, padx=5, pady=5)
        
        # Her modül için ayrı frame
        self.cari_frame = tk.Frame(self.notebook, bg=self.bg_color)
        self.satis_frame = tk.Frame(self.notebook, bg=self.bg_color)
        self.muhasebe_frame = tk.Frame(self.notebook, bg=self.bg_color)
        self.stok_frame = tk.Frame(self.notebook, bg=self.bg_color)
        self.rapor_frame = tk.Frame(self.notebook, bg=self.bg_color)
        
        # Sekmelere ekle
        self.notebook.add(self.cari_frame, text="👥 Cariler")
        self.notebook.add(self.satis_frame, text="📋 Satışlar")
        self.notebook.add(self.muhasebe_frame, text="💰 Muhasebe")
        self.notebook.add(self.stok_frame, text="📦 Stok")
        self.notebook.add(self.rapor_frame, text="📊 Raporlar")
        
        # Sekme değiştiğinde içeriği yenile
        self.notebook.bind("<<NotebookTabChanged>>", self.on_tab_changed)
        
        # İçerikleri yükle
        self.load_cari_content()
        self.load_satis_content()
        self.load_muhasebe_content()
        self.load_stok_content()
        self.load_rapor_content()
    
    def on_tab_changed(self, event=None):
        """Sekme değiştiğinde"""
        secili = self.notebook.index(self.notebook.select())
        moduller = ["Cari Listesi", "Satışlar", "Muhasebe", "Stok Yönetimi", "Raporlar"]
        self.status_label.config(text=moduller[secili])
    
    def create_status_bar(self):
        """Durum çubuğu"""
        status = tk.Frame(self.root, bg="#2c3e50", height=30)
        status.pack(fill=tk.X)
        status.pack_propagate(False)
        
        self.status_label = tk.Label(status, text="Hazır", 
                                    font=("Arial", 9), bg="#2c3e50", fg="white")
        self.status_label.pack(side=tk.LEFT, padx=10)
        
        # Toplam bakiye
        self.bakiye_label = tk.Label(status, text="", 
                                    font=("Arial", 9, "bold"), bg="#2c3e50", fg="#27ae60")
        self.bakiye_label.pack(side=tk.RIGHT, padx=10)
        self.update_bakiye()
    
    def update_bakiye(self):
        """Toplam bakiyeyi güncelle"""
        rapor = self.db.muhasebe_rapor()
        bakiye = rapor.get("bakiye", 0)
        self.bakiye_label.config(text=f"Toplam Bakiye: {bakiye:,.2f} ₺")
        self.root.after(5000, self.update_bakiye)
    
    def clear_content(self):
        """İçeriği temizle"""
        for widget in self.content_frame.winfo_children():
            widget.destroy()
    
    # ==================== CARİ MODÜLÜ ====================
    
    def load_cari_content(self):
        """Cari sekmesi içeriğini yükle"""
        # Başlık
        tk.Label(self.cari_frame, text="👥 Cari (Müşteri) Listesi", 
                font=("Arial", 16, "bold"), bg=self.bg_color).pack(pady=10)
        
        # Araç çubuğu
        toolbar = tk.Frame(self.cari_frame, bg=self.bg_color)
        toolbar.pack(fill=tk.X, pady=5)
        
        tk.Button(toolbar, text="+ Yeni Cari", command=self.cari_ekle_pencere,
                 bg=self.accent_color, fg="white", padx=10).pack(side=tk.LEFT, padx=5)
        
        tk.Button(toolbar, text="🔄 Yenile", command=self.load_cari_content,
                 bg="#95a5a6", fg="white", padx=10).pack(side=tk.LEFT, padx=5)
        
        # Arama
        tk.Label(toolbar, text="Ara:", bg=self.bg_color).pack(side=tk.LEFT, padx=10)
        self.cari_arama = tk.Entry(toolbar, width=30)
        self.cari_arama.pack(side=tk.LEFT, padx=5)
        self.cari_arama.bind("<KeyRelease>", self.cari_ara)
        
        # Tablo
        table_frame = tk.Frame(self.cari_frame)
        table_frame.pack(fill=tk.BOTH, expand=True)
        
        # Scrollbar
        scroll_y = tk.Scrollbar(table_frame, orient=tk.VERTICAL)
        scroll_y.pack(side=tk.RIGHT, fill=tk.Y)
        
        columns = ("ID", "Ad", "Telefon", "Borç", "Alacak", "Tarih", "Notlar", "Belge Numarası", "işlem Tipi","Bakiye Cinsi")
        self.cari_tablo = ttk.Treeview(table_frame, columns=columns, 
                                       show="headings", yscrollcommand=scroll_y.set)
        scroll_y.config(command=self.cari_tablo.yview)
        
        for col in columns:
            self.cari_tablo.heading(col, text=col)
            self.cari_tablo.column(col, width=100)
        
        self.cari_tablo.column("Ad", width=150)
        self.cari_tablo.column("Telefon", width=120)
        
        self.cari_tablo.pack(fill=tk.BOTH, expand=True)
        self.cari_tablo.bind("<Double-1>", self.cari_detay)
        
        # Verileri yükle
        self.cari_tablo_verileri = self.db.cari_listele()
        self.cari_tablo_doldur(self.cari_tablo_verileri)
    
    def cari_tablo_doldur(self, veriler):
        """Tabloyu verilerle doldur"""
        for item in self.cari_tablo.get_children():
            self.cari_tablo.delete(item)
        
        for cari in veriler:
            self.cari_tablo.insert("", tk.END, values=(
                cari["id"],
                cari["ad"],
                cari["telefon"] or "-",
                f"{cari['borc']:,.2f} ₺",
                f"{cari['alacak']:,.2f} ₺",
                cari["tarih"][:10] if cari["tarih"] else "-"
            ))
    
    def cari_ara(self, event=None):
        """Cari ara"""
        arama = self.cari_arama.get().lower()
        if not arama:
            veriler = self.cari_tablo_verileri
        else:
            veriler = [c for c in self.cari_tablo_verileri 
                      if arama in c["ad"].lower() or arama in (c["telefon"] or "").lower()]
        self.cari_tablo_doldur(veriler)
    
    def cari_ekle_pencere(self):
        """Yeni cari ekleme penceresi"""
        win = tk.Toplevel(self.root)
        win.title("Yeni Cari Ekle")
        win.geometry("400x350")
        win.configure(bg="white")
        
        tk.Label(win, text="Yeni Cari Bilgileri", font=("Arial", 14, "bold"),
                bg="white").pack(pady=15)
        
        # Form
        form = tk.Frame(win, bg="white")
        form.pack(pady=10)
        
        tk.Label(form, text="Ad Soyad:", bg="white").grid(row=0, column=0, sticky="w", pady=5)
        ad_entry = tk.Entry(form, width=30)
        ad_entry.grid(row=0, column=1, pady=5, padx=5)
        
        tk.Label(form, text="Telefon:", bg="white").grid(row=1, column=0, sticky="w", pady=5)
        tel_entry = tk.Entry(form, width=30)
        tel_entry.grid(row=1, column=1, pady=5, padx=5)
        
        tk.Label(form, text="Adres:", bg="white").grid(row=2, column=0, sticky="w", pady=5)
        adres_entry = tk.Entry(form, width=30)
        adres_entry.grid(row=2, column=1, pady=5, padx=5)
        
        tk.Label(form, text="Notlar:", bg="white").grid(row=3, column=0, sticky="w", pady=5)
        notlar_entry = tk.Text(form, width=30, height=4)
        notlar_entry.grid(row=3, column=1, pady=5, padx=5)
        
        def kaydet():
            ad = ad_entry.get().strip()
            if not ad:
                messagebox.showerror("Hata", "Ad alanı zorunludur!")
                return
            
            self.db.cari_ekle(ad, tel_entry.get(), adres_entry.get(), 
                            notlar_entry.get("1.0", tk.END).strip())
            messagebox.showinfo("Başarılı", "Cari başarıyla eklendi!")
            win.destroy()
            self.load_cari_content()
        
        tk.Button(win, text="Kaydet", command=kaydet,
                 bg=self.success_color, fg="white", padx=20, pady=5).pack(pady=15)
    
    def cari_detay(self, event=None):
        """Cari detay görünümü"""
        secili = self.cari_tablo.selection()
        if not secili:
            return
        
        item = self.cari_tablo.item(secili[0])
        cari_id = item["values"][0]
        
        cari = self.db.cari_bul(cari_id)
        if not cari:
            return
        
        win = tk.Toplevel(self.root)
        win.title(f"Cari: {cari['ad']}")
        win.geometry("600x500")
        win.configure(bg="white")
        
        # Bilgiler
        info_frame = tk.Frame(win, bg="white", bd=1, relief=tk.SOLID)
        info_frame.pack(fill=tk.X, padx=10, pady=10)
        
        tk.Label(info_frame, text=f"👤 {cari['ad']}", font=("Arial", 14, "bold"),
                bg="white").pack(pady=5)
        
        bilgi_text = f"Telefon: {cari['telefon'] or '-'}\nAdres: {cari['adres'] or '-'}\nNotlar: {cari['notlar'] or '-'}"
        tk.Label(info_frame, text=bilgi_text, font=("Arial", 10), bg="white",
                justify=tk.LEFT).pack(pady=5)
        
        # Borç/Alacak
        durum_frame = tk.Frame(win, bg="white")
        durum_frame.pack(fill=tk.X, padx=10, pady=5)
        
        tk.Label(durum_frame, text=f"💰 Borç: {cari['borc']:,.2f} ₺", 
                font=("Arial", 12, "bold"), fg=self.danger_color if cari['borc'] > 0 else "green",
                bg="white").pack(side=tk.LEFT, padx=20)
        
        tk.Label(durum_frame, text=f"💵 Alacak: {cari['alacak']:,.2f} ₺", 
                font=("Arial", 12, "bold"), fg=self.success_color,
                bg="white").pack(side=tk.LEFT, padx=20)
        
        # Satış geçmişi
        tk.Label(win, text="📋 Satış Geçmişi", font=("Arial", 12, "bold"),
                bg="white").pack(pady=5)
        
        table_frame = tk.Frame(win)
        table_frame.pack(fill=tk.BOTH, expand=True, padx=10, pady=5)
        
        scroll_y = tk.Scrollbar(table_frame, orient=tk.VERTICAL)
        scroll_y.pack(side=tk.RIGHT, fill=tk.Y)
        
        columns = ("Ürün", "Miktar", "Birim Fiyat", "Toplam", "Ödenen", "Kalan", "Durum")
        satis_tablo = ttk.Treeview(table_frame, columns=columns, 
                                      show="headings", yscrollcommand=scroll_y.set)
        scroll_y.config(command=satis_tablo.yview)
        
        for col in columns:
            satis_tablo.heading(col, text=col)
            satis_tablo.column(col, width=80)
        
        satis_tablo.pack(fill=tk.BOTH, expand=True)
        
        # Verileri yükle
        satis_list = self.db.satis_listele(cari_id)
        for v in satis_list:
            satis_tablo.insert("", tk.END, values=(
                v["urun_adi"],
                v["miktar"],
                f"{v['birim_fiyat']:,.2f} ₺",
                f"{v['toplam']:,.2f} ₺",
                f"{v['odendi']:,.2f} ₺",
                f"{v['kalan']:,.2f} ₺",
                v["durum"]
            ))
        
        # Butonlar
        btn_frame = tk.Frame(win, bg="white")
        btn_frame.pack(pady=10)
        
        tk.Button(btn_frame, text="+ Satış Ekle", 
                command=lambda: self.satis_ekle_pencere(cari_id, cari['ad']),
                bg=self.accent_color, fg="white", padx=10).pack(side=tk.LEFT, padx=5)
        
        tk.Button(btn_frame, text="Ödeme Al", 
                command=lambda: self.odeme_al_pencere(cari_id, cari['ad']),
                bg=self.success_color, fg="white", padx=10).pack(side=tk.LEFT, padx=5)
        
        tk.Button(btn_frame, text="Sil", 
                command=lambda: self.cari_sil(cari_id, cari['ad']),
                bg=self.danger_color, fg="white", padx=10).pack(side=tk.LEFT, padx=5)
    
    def cari_sil(self, cari_id, cari_ad):
        """Cari sil"""
        if messagebox.askyesno("Onay", f"{cari_ad} cari silinsin mi?"):
            self.db.cari_sil(cari_id)
            messagebox.showinfo("Başarılı", "Cari silindi!")
            self.load_cari_content()
    
    # ==================== SATIŞ MODÜLÜ ====================
    
    def load_satis_content(self):
        """Satış sekmesi içeriğini yükle"""
        # Temizle
        for widget in self.satis_frame.winfo_children():
            widget.destroy()
            
        tk.Label(self.satis_frame, text="📋 Satış Listesi", 
                font=("Arial", 16, "bold"), bg=self.bg_color).pack(pady=10)
        
        # Filtre
        filter_frame = tk.Frame(self.satis_frame, bg=self.bg_color)
        filter_frame.pack(fill=tk.X, pady=5)
        
        tk.Label(filter_frame, text="Cari:", bg=self.bg_color).pack(side=tk.LEFT, padx=5)
        
        cariler = self.db.cari_listele()
        cari_adlari = ["Tümü"] + [c["ad"] for c in cariler]
        self.cari_secim = tk.StringVar(value="Tümü")
        
        combo = ttk.Combobox(filter_frame, textvariable=self.cari_secim, 
                            values=cari_adlari, state="readonly", width=20)
        combo.pack(side=tk.LEFT, padx=5)
        combo.bind("<<ComboboxSelected>>", self.satis_filtrele)
        
        tk.Button(filter_frame, text="+ Yeni Satış", 
                 command=self.satis_ekle_pencere,
                 bg=self.accent_color, fg="white", padx=10).pack(side=tk.LEFT, padx=20)
        
        # Tablo
        table_frame = tk.Frame(self.satis_frame)
        table_frame.pack(fill=tk.BOTH, expand=True)
        
        scroll_y = tk.Scrollbar(table_frame, orient=tk.VERTICAL)
        scroll_y.pack(side=tk.RIGHT, fill=tk.Y)
        
        columns = ("ID", "Cari", "Ürün", "Miktar", "Birim Fiyat", "Toplam", "Ödenen", "Kalan", "Açıklama", "Durum", "Tarih")
        self.satis_tablo = ttk.Treeview(table_frame, columns=columns, 
                                           show="headings", yscrollcommand=scroll_y.set)
        scroll_y.config(command=self.satis_tablo.yview)
        
        for col in columns:
            self.satis_tablo.heading(col, text=col)
            self.satis_tablo.column(col, width=80)
        
        self.satis_tablo.column("Cari", width=120)
        self.satis_tablo.column("Ürün", width=150)
        self.satis_tablo.column("Açıklama", width=120)
        
        self.satis_tablo.pack(fill=tk.BOTH, expand=True)
        
        # Verileri yükle
        self.satis_veriler = self.db.satis_listele()
        self.satis_tablo_doldur(self.satis_veriler)
    
    def satis_tablo_doldur(self, veriler):
        """Satış tablosunu doldur"""
        for item in self.satis_tablo.get_children():
            self.satis_tablo.delete(item)
        
        for v in veriler:
            self.satis_tablo.insert("", tk.END, values=(
                v["id"],
                v["cari_ad"],
                v["urun_adi"],
                v["miktar"],
                f"{v['birim_fiyat']:,.2f} ₺",
                f"{v['toplam']:,.2f} ₺",
                f"{v['odendi']:,.2f} ₺",
                f"{v['kalan']:,.2f} ₺",
                v.get("aciklama") or "-",
                v["durum"],
                v["tarih"][:10] if v["tarih"] else "-"
            ))
    
    def satis_filtrele(self, event=None):
        """Satış filtrele"""
        secili = self.cari_secim.get()
        if secili == "Tümü":
            self.satis_tablo_doldur(self.satis_veriler)
        else:
            filtreli = [v for v in self.satis_veriler if v["cari_ad"] == secili]
            self.satis_tablo_doldur(filtreli)
    
    def satis_ekle_pencere(self, cari_id=None, cari_ad=None):
        """Satış ekleme penceresi
        
        Bu fonksiyon yeni bir satış kaydı oluşturur.
        Stoktan düşme işlemi otomatik yapılır.
        """
        win = tk.Toplevel(self.root)
        win.title("Yeni Satış")
        win.geometry("400x400")
        win.configure(bg="white")
        
        tk.Label(win, text="Satış Kaydı", font=("Arial", 14, "bold"),
                bg="white").pack(pady=15)
        
        form = tk.Frame(win, bg="white")
        form.pack(pady=10)
        
        # Cari seçimi
        tk.Label(form, text="Cari:", bg="white").grid(row=0, column=0, sticky="w", pady=5)
        
        cariler = self.db.cari_listele()
        cari_adlari = [c["ad"] for c in cariler]
        cari_var = tk.StringVar(value=cari_ad if cari_id else (cari_adlari[0] if cari_adlari else ""))
        
        cari_combo = ttk.Combobox(form, textvariable=cari_var, values=cari_adlari, 
                                 state="readonly", width=27)
        cari_combo.grid(row=0, column=1, pady=5, padx=5)
        
        # Stok (Ürün) seçimi
        tk.Label(form, text="Ürün (Stok):", bg="white").grid(row=1, column=0, sticky="w", pady=5)
        
        stoklar = self.db.stok_listele()
        stok_secenekleri = [f"{s['urun_adi']} (Stok: {s['miktar']})" for s in stoklar]
        
        if not stok_secenekleri:
            messagebox.showerror("Hata", "Stok bulunmuyor! Önce stok ekleyin.")
            win.destroy()
            return
        
        stok_var = tk.StringVar(value=stok_secenekleri[0])
        stok_combo = ttk.Combobox(form, textvariable=stok_var, values=stok_secenekleri, 
                                 state="readonly", width=27)
        stok_combo.grid(row=1, column=1, pady=5, padx=5)
        
        # Miktar
        tk.Label(form, text="Miktar:", bg="white").grid(row=2, column=0, sticky="w", pady=5)
        miktar_entry = tk.Entry(form, width=30)
        miktar_entry.grid(row=2, column=1, pady=5, padx=5)
        
        # Birim fiyat
        tk.Label(form, text="Birim Fiyat (₺):", bg="white").grid(row=3, column=0, sticky="w", pady=5)
        fiyat_entry = tk.Entry(form, width=30)
        fiyat_entry.grid(row=3, column=1, pady=5, padx=5)
        
        # Açıklama
        tk.Label(form, text="Açıklama:", bg="white").grid(row=4, column=0, sticky="w", pady=5)
        aciklama_entry = tk.Entry(form, width=30)
        aciklama_entry.grid(row=4, column=1, pady=5, padx=5)
        
        def kaydet():
            cari_ad = cari_var.get()
            if not cari_ad:
                messagebox.showerror("Hata", "Cari seçiniz!")
                return
            
            # Cari ID bul
            cari_bul = next((c for c in cariler if c["ad"] == cari_ad), None)
            if not cari_bul:
                messagebox.showerror("Hata", "Cari bulunamadı!")
                return
            
            # Stok seçimi
            stok_secim = stok_var.get()
            if not stok_secim:
                messagebox.showerror("Hata", "Ürün seçiniz!")
                return
            
            # Stok ID bul
            secim_ad = stok_secim.split(" (Stok:")[0]
            stok_bul = next((s for s in stoklar if s["urun_adi"] == secim_ad), None)
            if not stok_bul:
                messagebox.showerror("Hata", "Stok bulunamadı!")
                return
            
            try:
                miktar = int(miktar_entry.get())
                fiyat = float(fiyat_entry.get())
                aciklama = aciklama_entry.get().strip()
                
                if miktar <= 0 or fiyat <= 0:
                    raise ValueError()
            except:
                messagebox.showerror("Hata", "Geçerli miktar ve fiyat giriniz!")
                return
            
            try:
                # Satış ekle (stoktan düşülür)
                self.db.satis_ekle(cari_bul["id"], stok_bul["id"], miktar, fiyat, aciklama)
                messagebox.showinfo("Başarılı", f"Satış kaydedildi!\nStoktan {miktar} adet düşüldü.")
                win.destroy()
                self.load_satis_content()
            except ValueError as e:
                messagebox.showerror("Hata", str(e))
            except Exception as e:
                messagebox.showerror("Hata", f"Bir hata oluştu: {e}")
        
        tk.Button(win, text="Kaydet", command=kaydet,
                 bg=self.success_color, fg="white", padx=20, pady=5).pack(pady=15)
    
    def odeme_al_pencere(self, cari_id, cari_ad):
        """Ödeme alma penceresi"""
        win = tk.Toplevel(self.root)
        win.title(f"Ödeme Al - {cari_ad}")
        win.geometry("400x300")
        win.configure(bg="white")
        
        tk.Label(win, text=f"Ödeme Al: {cari_ad}", font=("Arial", 14, "bold"),
                bg="white").pack(pady=15)
        
        # Satış seçimi
        satis_list = self.db.satis_listele(cari_id)
        aktif_satis = [v for v in satis_list if v["kalan"] > 0]
        
        if not aktif_satis:
            messagebox.showinfo("Bilgi", "Ödenmemiş satış bulunmuyor!")
            win.destroy()
            return
        
        form = tk.Frame(win, bg="white")
        form.pack(pady=10)
        
        tk.Label(form, text="Satış:", bg="white").grid(row=0, column=0, sticky="w", pady=5)
        
        satis_secenekleri = [f"{v['urun_adi']} - Kalan: {v['kalan']:,.2f} ₺" 
                               for v in aktif_satis]
        satis_var = tk.StringVar(value=satis_secenekleri[0])
        
        combo = ttk.Combobox(form, textvariable=satis_var, 
                            values=satis_secenekleri, state="readonly", width=27)
        combo.grid(row=0, column=1, pady=5, padx=5)
        
        tk.Label(form, text="Ödeme Tutarı (₺):", bg="white").grid(row=1, column=0, sticky="w", pady=5)
        tutar_entry = tk.Entry(form, width=30)
        tutar_entry.grid(row=1, column=1, pady=5, padx=5)
        
        def ode():
            try:
                tutar = float(tutar_entry.get())
                if tutar <= 0:
                    raise ValueError()
            except:
                messagebox.showerror("Hata", "Geçerli tutar giriniz!")
                return
            
            # Satış ID bul
            secili = satis_var.get()
            satis_bul = next((v for v in aktif_satis 
                                if f"{v['urun_adi']} - Kalan: {v['kalan']:,.2f} ₺" == secili), None)
            
            if satis_bul:
                self.db.satis_ode(satis_bul["id"], tutar)
                messagebox.showinfo("Başarılı", "Ödeme kaydedildi!")
                win.destroy()
                self.load_satis_content()
        
        tk.Button(win, text="Ödemeyi Kaydet", command=ode,
                 bg=self.success_color, fg="white", padx=20, pady=5).pack(pady=15)
    
    # ==================== MUHASEBE MODÜLÜ ====================
    
    def load_muhasebe_content(self):
        """Muhasebe sekmesi içeriğini yükle"""
        # Temizle
        for widget in self.muhasebe_frame.winfo_children():
            widget.destroy()
            
        tk.Label(self.muhasebe_frame, text="💰 Muhasebe", 
                font=("Arial", 16, "bold"), bg=self.bg_color).pack(pady=10)
        
        # Özet kartları
        rapor = self.db.muhasebe_rapor()
        
        kart_frame = tk.Frame(self.muhasebe_frame, bg=self.bg_color)
        kart_frame.pack(fill=tk.X, pady=10)
        
        self.kart_olustur(kart_frame, "💵 Toplam Gelir", f"{rapor.get('gelir', 0):,.2f} ₺", 
                         self.success_color).pack(side=tk.LEFT, padx=10, fill=tk.X, expand=True)
        
        self.kart_olustur(kart_frame, "💸 Toplam Gider", f"{rapor.get('gider', 0):,.2f} ₺", 
                         self.danger_color).pack(side=tk.LEFT, padx=10, fill=tk.X, expand=True)
        
        self.kart_olustur(kart_frame, "📊 Bakiye", f"{rapor.get('bakiye', 0):,.2f} ₺", 
                         self.accent_color).pack(side=tk.LEFT, padx=10, fill=tk.X, expand=True)
        
        # İşlem ekleme
        islem_frame = tk.LabelFrame(self.muhasebe_frame, text="Yeni İşlem", 
                                    bg="white", font=("Arial", 11, "bold"))
        islem_frame.pack(fill=tk.X, padx=10, pady=10)
        
        form = tk.Frame(islem_frame, bg="white")
        form.pack(pady=10)
        
        tk.Label(form, text="İşlem Türü:", bg="white").grid(row=0, column=0, pady=5, padx=5)
        tur_var = tk.StringVar(value="gelir")
        ttk.Radiobutton(form, text="Gelir", variable=tur_var, value="gelir").grid(row=0, column=1)
        ttk.Radiobutton(form, text="Gider", variable=tur_var, value="gider").grid(row=0, column=2)
        
        tk.Label(form, text="Kategori:", bg="white").grid(row=1, column=0, pady=5, padx=5)
        kat_entry = tk.Entry(form, width=25)
        kat_entry.grid(row=1, column=1, columnspan=2, pady=5, padx=5)
        
        tk.Label(form, text="Tutar (₺):", bg="white").grid(row=2, column=0, pady=5, padx=5)
        tutar_entry = tk.Entry(form, width=25)
        tutar_entry.grid(row=2, column=1, columnspan=2, pady=5, padx=5)
        
        tk.Label(form, text="Açıklama:", bg="white").grid(row=3, column=0, pady=5, padx=5)
        aciklama_entry = tk.Entry(form, width=25)
        aciklama_entry.grid(row=3, column=1, columnspan=2, pady=5, padx=5)
        
        def ekle():
            try:
                tutar = float(tutar_entry.get())
                if tutar <= 0:
                    raise ValueError()
            except:
                messagebox.showerror("Hata", "Geçerli tutar giriniz!")
                return
            
            kategori = kat_entry.get().strip() or "Diğer"
            self.db.muhasebe_ekle(tur_var.get(), kategori, tutar, aciklama_entry.get())
            messagebox.showinfo("Başarılı", "İşlem kaydedildi!")
            self.load_muhasebe_content()
        
        tk.Button(islem_frame, text="Kaydet", command=ekle,
                 bg=self.success_color, fg="white", padx=15).pack(pady=10)
        
        # Geçmiş işlemler
        tk.Label(self.muhasebe_frame, text="Geçmiş İşlemler", font=("Arial", 12, "bold"),
                bg=self.bg_color).pack(pady=5)
        
        table_frame = tk.Frame(self.muhasebe_frame)
        table_frame.pack(fill=tk.BOTH, expand=True, pady=10)
        
        scroll_y = tk.Scrollbar(table_frame, orient=tk.VERTICAL)
        scroll_y.pack(side=tk.RIGHT, fill=tk.Y)
        
        columns = ("ID", "Tür", "Kategori", "Tutar", "Açıklama", "Tarih")
        muhasebe_tablo = ttk.Treeview(table_frame, columns=columns, 
                                      show="headings", yscrollcommand=scroll_y.set)
        scroll_y.config(command=muhasebe_tablo.yview)
        
        for col in columns:
            muhasebe_tablo.heading(col, text=col)
            muhasebe_tablo.column(col, width=100)
        
        muhasebe_tablo.column("Açıklama", width=200)
        muhasebe_tablo.pack(fill=tk.BOTH, expand=True)
        
        islemler = self.db.muhasebe_listele()
        for islem in islemler:
            renk = self.success_color if islem["turu"] == "gelir" else self.danger_color
            muhasebe_tablo.insert("", tk.END, values=(
                islem["id"],
                islem["turu"].upper(),
                islem["kategori"],
                f"{islem['tutar']:,.2f} ₺",
                islem["aciklama"] or "-",
                islem["tarih"][:10] if islem["tarih"] else "-"
            ), tags=(islem["turu"],))
        
        muhasebe_tablo.tag_configure("gelir", foreground=self.success_color)
        muhasebe_tablo.tag_configure("gider", foreground=self.danger_color)
    
    def kart_olustur(self, parent, baslik, deger, renk):
        """Bilgi kartı oluştur"""
        frame = tk.Frame(parent, bg=renk, padx=20, pady=15, relief=tk.RAISED, bd=2)
        
        tk.Label(frame, text=baslik, font=("Arial", 10), bg=renk, fg="white").pack()
        tk.Label(frame, text=deger, font=("Arial", 16, "bold"), bg=renk, fg="white").pack()
        
        return frame
    
    # ==================== STOK MODÜLÜ ====================
    
    def load_stok_content(self):
        """Stok sekmesi içeriğini yükle"""
        # Temizle
        for widget in self.stok_frame.winfo_children():
            widget.destroy()
            
        tk.Label(self.stok_frame, text="📦 Stok Yönetimi", 
                font=("Arial", 16, "bold"), bg=self.bg_color).pack(pady=10)
        
        # Stok ekle
        ekle_frame = tk.LabelFrame(self.stok_frame, text="Yeni Ürün Ekle", 
                                   bg="white", font=("Arial", 11, "bold"))
        ekle_frame.pack(fill=tk.X, padx=10, pady=10)
        
        form = tk.Frame(ekle_frame, bg="white")
        form.pack(pady=10)
        
        tk.Label(form, text="Ürün Adı:", bg="white").grid(row=0, column=0, pady=5, padx=5)
        urun_entry = tk.Entry(form, width=25)
        urun_entry.grid(row=0, column=1, pady=5, padx=5)
        
        tk.Label(form, text="Birim:", bg="white").grid(row=0, column=2, pady=5, padx=5)
        birim_entry = tk.Entry(form, width=10)
        birim_entry.grid(row=0, column=3, pady=5, padx=5)
        
        tk.Label(form, text="Miktar:", bg="white").grid(row=1, column=0, pady=5, padx=5)
        miktar_entry = tk.Entry(form, width=25)
        miktar_entry.grid(row=1, column=1, pady=5, padx=5)
        
        tk.Label(form, text="Birim Fiyat (₺):", bg="white").grid(row=1, column=2, pady=5, padx=5)
        fiyat_entry = tk.Entry(form, width=10)
        fiyat_entry.grid(row=1, column=3, pady=5, padx=5)
        
        def ekle():
            urun = urun_entry.get().strip()
            birim = birim_entry.get().strip() or "adet"
            try:
                miktar = int(miktar_entry.get())
                fiyat = float(fiyat_entry.get())
            except:
                messagebox.showerror("Hata", "Geçerli sayılar giriniz!")
                return
            
            if not urun:
                messagebox.showerror("Hata", "Ürün adı zorunludur!")
                return
            
            self.db.stok_ekle(urun, birim, miktar, fiyat)
            messagebox.showinfo("Başarılı", "Ürün eklendi!")
            self.load_stok_content()
        
        tk.Button(ekle_frame, text="Ekle", command=ekle,
                 bg=self.accent_color, fg="white", padx=15).pack(pady=10)
        
        # Stok listesi
        table_frame = tk.Frame(self.stok_frame)
        table_frame.pack(fill=tk.BOTH, expand=True, pady=10)
        
        scroll_y = tk.Scrollbar(table_frame, orient=tk.VERTICAL)
        scroll_y.pack(side=tk.RIGHT, fill=tk.Y)
        
        columns = ("ID", "Ürün Adı", "Birim", "Miktar", "Birim Fiyat", "Toplam Değer")
        stok_tablo = ttk.Treeview(table_frame, columns=columns, 
                                  show="headings", yscrollcommand=scroll_y.set)
        scroll_y.config(command=stok_tablo.yview)
        
        for col in columns:
            stok_tablo.heading(col, text=col)
            stok_tablo.column(col, width=120)
        
        stok_tablo.pack(fill=tk.BOTH, expand=True)
        
        stok_list = self.db.stok_listele()
        for s in stok_list:
            toplam = s["miktar"] * s["birim_fiyat"]
            stok_tablo.insert("", tk.END, values=(
                s["id"],
                s["urun_adi"],
                s["birim"],
                s["miktar"],
                f"{s['birim_fiyat']:,.2f} ₺",
                f"{toplam:,.2f} ₺"
            ))
    
    # ==================== RAPORLAR ====================
    
    def load_rapor_content(self):
        """Raporlar sekmesi içeriğini yükle"""
        # Temizle
        for widget in self.rapor_frame.winfo_children():
            widget.destroy()
            
        tk.Label(self.rapor_frame, text="📊 Raporlar", 
                font=("Arial", 16, "bold"), bg=self.bg_color).pack(pady=10)
        
        # Özet rapor
        rapor = self.db.muhasebe_rapor()
        
        rapor_frame = tk.LabelFrame(self.rapor_frame, text="Muhasebe Özeti", 
                                   bg="white", font=("Arial", 11, "bold"))
        rapor_frame.pack(fill=tk.X, padx=10, pady=10)
        
        icerik = f"""
        💵 Toplam Gelir: {rapor.get('gelir', 0):,.2f} ₺
        💸 Toplam Gider: {rapor.get('gider', 0):,.2f} ₺
        📊 Net Bakiye: {rapor.get('bakiye', 0):,.2f} ₺
        """
        tk.Label(rapor_frame, text=icerik, font=("Arial", 12), bg="white",
                justify=tk.LEFT).pack(pady=20)
        
        # Cari özeti
        cariler = self.db.cari_listele()
        toplam_borc = sum(c["borc"] for c in cariler)
        toplam_alacak = sum(c["alacak"] for c in cariler)
        
        cari_frame = tk.LabelFrame(self.rapor_frame, text="Cari Özeti", 
                                   bg="white", font=("Arial", 11, "bold"))
        cari_frame.pack(fill=tk.X, padx=10, pady=10)
        
        cari_icerik = f"""
        👥 Toplam Cari: {len(cariler)}
        💰 Toplam Borç: {toplam_borc:,.2f} ₺
        💵 Toplam Alacak: {toplam_alacak:,.2f} ₺
        """
        tk.Label(cari_frame, text=cari_icerik, font=("Arial", 12), bg="white",
                justify=tk.LEFT).pack(pady=20)

    # ==================== ESKİ METHODLAR - uyumluluk ====================
    
    def show_cari_listesi(self):
        """Cari listesine git"""
        self.notebook.select(0)
    
    def show_satis_listesi(self):
        """Satış listesine git"""
        self.notebook.select(1)
    
    def show_muhasebe(self):
        """Muhasebeye git"""
        self.notebook.select(2)
    
    def show_stok(self):
        """Stok yönetimine git"""
        self.notebook.select(3)
    
    def show_raporlar(self):
        """Raporlara git"""
        self.notebook.select(4)


def main():
    """Ana fonksiyon"""
    root = tk.Tk()
    app = ProfilMuhasebeApp(root)
    root.mainloop()


if __name__ == "__main__":
    main()