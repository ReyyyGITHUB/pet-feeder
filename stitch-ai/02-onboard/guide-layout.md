Selamat datang di tim pengembangan **Smart Pet Feeder**. Dokumen ini berfungsi sebagai panduan standar (UI/UX Guide) untuk memastikan setiap komponen frontend yang dibuat sesuai dengan bahasa desain yang telah ditentukan.

---

## 🎨 1. Core Visual Identity
Seluruh interface wajib mengikuti aturan visual berikut untuk menjaga estetika **Futuristic Glassmorphism**:

- **Background:** Deep Navy Blue (`#0f172a`). Jangan gunakan hitam murni agar efek shadow tetap terlihat.
- **Surface:** Frosted Glass effect. Gunakan transparansi rendah dengan blur tinggi.
- **Accent:** Glowing Cyan Neon (`#22d3ee`). Digunakan hanya untuk elemen penting (Active state, Gauge, Buttons).
- **Typography:** Clean Sans-serif (Rekomendasi: *Inter*, *Geist*, atau *Plus Jakarta Sans*).

---

## 🧱 2. Bento Grid System
Gunakan layout **Bento Grid** untuk menyusun informasi. Aturannya:
- **Gap:** Konsisten di `1rem` atau `1.5rem`.
- **Radius:** Gunakan `rounded-3xl` (approx 24px) untuk kesan modern dan ramah.
- **Hierarchy:** - **Large Card:** Untuk *Stock Monitor* (Data Utama).
    - **Medium Card:** Untuk *Scheduler* & *Activity Log*.
    - **Small Card:** Untuk *Device Status* & *Settings*.

---

## 🎡 3. Component Standards

### A. Circular Food Gauge
- **Visual:** Harus menggunakan radial progress bar.
- **Color Logic:** - > 50%: Cyan Glow.
    - 20% - 50%: Yellow/Orange Warning.
    - < 20%: Red Pulse.
- **Animation:** Gunakan `framer-motion` untuk transisi angka yang *smooth*.

### B. Scrolling Wheel Time Picker
- **Style:** iOS-inspired vertical roller.
- **Focus:** Elemen tengah harus memiliki `opacity-100` dan font-size lebih besar.
- **Fade:** Elemen atas dan bawah harus memiliki gradasi transparansi (`mask-image`).

### C. Manual Action Button
- **State:** - **Default:** Border cyan tipis.
    - **Hover:** Outer glow (drop-shadow) cyan menyala.
    - **Active:** Scale down sedikit (0.95) untuk memberi kesan mekanik.

---

## 💻 4. Implementation Snippets (Tailwind CSS)

### The Glass Card
```html
<div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
  </div>
