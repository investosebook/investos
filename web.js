document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
});
bookLink.innerHTML = `
    <div class="bg-white rounded-lg h-48 mb-4"></div>
    <p class="text-center">Judul buku ${i}</p>
`;
