// navbar.js
const navbarHTML = `
<nav class="bg-white border-b border-slate-200 sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="index.html" class="text-xl font-bold text-blue-600">XI RPL</a>
        <div class="flex space-x-6 text-sm font-medium text-slate-600">
            <a href="index.html" class="hover:text-blue-600 transition">Rumah</a>
            <a href="profil.html" class="hover:text-blue-600 transition">Profil Kelas</a>
            <a href="anggota.html" class="hover:text-blue-600 transition">Daftar Anggota</a>
            <a href="kontak.html" class="hover:text-blue-600 transition">Kontak</a>
        </div>
    </div>
</nav>
`;

document.getElementById('navbar-container').innerHTML = navbarHTML;