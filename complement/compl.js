
// ONE'S COMPLEMENT
function calculateOnesComplement() {
    const inputDecimal = parseInt(document.getElementById('input_decimal').value);
    //mengambil nilai variabel inputDecimal dari id input = 'input_decimal'
    const onesComplement = calculateOnesComplementFromDecimal(inputDecimal);
    //mengambil nilai dari function calculateOnesComplementFromDecimal
    const binary = (inputDecimal >>> 0).toString(2);
    document.getElementById('compls').textContent = `One's Complement dari ${inputDecimal} (${binary}) adalah ${onesComplement}  `;
}

function calculateOnesComplementFromDecimal(decimal) {
    const binary = (decimal >>> 0).toString(2); // Mengonversi ke biner dengan >>> 0
    let onesComplement = '';
    for (let i = 0; i < binary.length; i++) {
        onesComplement += binary[i] === '0' ? '1' : '0';
    }
    return onesComplement;

}
// ONE'S COMPLEMENT

// TWO'S COMPLEMENT
function calculateTwosComplement() {
    const inputDecimal = parseInt(document.getElementById('input_decimal2').value);
    //mengambil nilai variabel inputDecimal dari id input = 'input_decimal'
    const twosComplement = calculateTwosComplementFromDecimal(inputDecimal);
    //mengambil nilai dari function calculateTwosComplementFromDecimal
    const binary = (inputDecimal >>> 0).toString(2);
    document.getElementById('compls2').textContent = `Bilangan desimal ${inputDecimal} = ${binary} dalam (biner) \nJadi Two's Complement dari ${inputDecimal} adalah ${twosComplement}`;
}
function calculateTwosComplementFromDecimal(decimal) {
    const binary = (decimal >>> 0).toString(2); // Mengonversi ke bilangan biner dengan >>> 0
    const bitLength = binary.length;
    const invertedBinary = binary
        .split('')
        .map(bit => bit === '0' ? '1' : '0')
        .join('');

    const carry = '1'.padStart(bitLength, '0');
    let twosComplement = '';
    let carryFlag = true;

    for (let i = bitLength - 1; i >= 0; i--) {
        const bit = invertedBinary[i];
        if (carryFlag) {
            if (bit === '1') {
                twosComplement = '0' + twosComplement;
            } else {
                twosComplement = '1' + twosComplement;
                carryFlag = false;
            }
        } else {
            twosComplement = bit + twosComplement;
        }
    }

    return twosComplement;
}
// END TWO'S COMPLEMENT















































document.addEventListener("DOMContentLoaded", function () {
    // Mendengarkan event hashchange saat tautan berubah
    window.addEventListener("hashchange", function () {
        const hash = window.location.hash;
        const navLinks = document.querySelectorAll(".nav-link");

        // Hapus kelas "active" dari semua elemen navbar
        navLinks.forEach(navLink => {
            navLink.classList.remove("active");
        });

        // Tambahkan kelas "active" ke elemen navbar yang sesuai dengan hash URL
        navLinks.forEach(navLink => {
            if (navLink.getAttribute("href") === hash) {
                navLink.classList.add("active");
            }
        });

        // Mengubah tautan href pada elemen navbar sesuai dengan hash URL
        navLinks.forEach(navLink => {
            if (navLink.getAttribute("href") === hash) {
                navLink.classList.add("active");
            }
        });

        // Mengubah tautan href pada elemen navbar sesuai dengan hash URL
        navLinks.forEach(navLink => {
            if (navLink.getAttribute("href") === hash) {
                navLink.classList.add("active");
            }
        });
    });

    // Panggil event hashchange saat halaman dimuat
    window.dispatchEvent(new Event("hashchange"));
});
document.addEventListener("DOMContentLoaded", function () {
    const backToHomeBtn = document.getElementById("backToHomeBtn");

    // Tampilkan tombol saat menggulir ke bawah
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            backToHomeBtn.style.display = "block";
        } else {
            backToHomeBtn.style.display = "none";
        }
    });

    // Tindakan saat tombol diklik
    backToHomeBtn.addEventListener("click", function () {
        const homeSection = document.getElementById("home");
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: "smooth" });
        }
    });
    // Cek apakah hash URL kosong, jika ya, tambahkan #Home
    if (window.location.hash === "") {
        window.location.hash = "Home";
    }

    // Mendengarkan event hashchange saat tautan berubah
    window.addEventListener("hashchange", function () {
        const hash = window.location.hash;
        const navLinks = document.querySelectorAll(".nav-link");

        // Hapus kelas "active" dari semua elemen navbar
        navLinks.forEach(navLink => {
            navLink.classList.remove("active");
        });

        // Tambahkan kelas "active" ke elemen navbar yang sesuai dengan hash URL
        navLinks.forEach(navLink => {
            if (hash === "#2compl" && navLink.getAttribute("href") === "#compl") {
                // Jika hash adalah #2compl, tandai #compl sebagai aktif
                navLink.classList.add("active");
            } else if (hash === "#compl7" && navLink.getAttribute("href") === "#compl") {
                // Jika hash adalah #2compl, tandai #compl sebagai aktif
                navLink.classList.add("active");
            } else if (hash === "#compl8" && navLink.getAttribute("href") === "#compl") {
                // Jika hash adalah #2compl, tandai #compl sebagai aktif
                navLink.classList.add("active");
            } else if (hash === "#compl9" && navLink.getAttribute("href") === "#compl") {
                // Jika hash adalah #2compl, tandai #compl sebagai aktif
                navLink.classList.add("active");
            } else if (navLink.getAttribute("href") === hash) {
                // Jika bukan #2compl dan href sesuai dengan hash, tandai sebagai aktif
                navLink.classList.add("active");
            }
        });
    });

    // Panggil event hashchange saat halaman dimuat
    window.dispatchEvent(new Event("hashchange"));
});


