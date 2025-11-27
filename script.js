// Melora - JavaScript Dosyası

// Ortak fonksiyonlar
function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Auth kontrolü ve güncelleme
function checkAuthStatus() {
  const isLoggedIn = localStorage.getItem("meloraLoggedIn") === "true";
  const userData = JSON.parse(localStorage.getItem("meloraUser") || "{}");
  const authButtons = document.getElementById("auth-buttons");
  
  if (isLoggedIn && userData.email && authButtons) {
    authButtons.innerHTML = `
      <a href="account.html" class="auth-btn primary">Hesabım</a>
      <button class="auth-btn ghost" id="logout-btn">Çıkış Yap</button>
    `;
    const logoutBtn = document.getElementById("logout-btn");
    logoutBtn?.addEventListener("click", () => {
      if (confirm("Çıkış yapmak istediğinize emin misiniz?")) {
        localStorage.removeItem("meloraLoggedIn");
        localStorage.removeItem("meloraUser");
        localStorage.removeItem("meloraCart");
        localStorage.removeItem("meloraAddress");
        window.location.reload();
      }
    });
  }
}

// Index.html için
function initIndexPage() {
  updateYear();
  checkAuthStatus();

  // Hakkımızda ve İletişim bölümlerini göster/gizle
  const aboutSection = document.getElementById("about");
  const contactSection = document.getElementById("contact");
  const aboutLink = document.getElementById("about-link");
  const contactLink = document.getElementById("contact-link");
  const aboutBtn = document.getElementById("about-btn");

  function showSection(section) {
    if (!section) return;
    // Önce tüm bölümleri gizle
    if (aboutSection) aboutSection.style.display = "none";
    if (contactSection) contactSection.style.display = "none";
    
    // Seçilen bölümü göster
    section.style.display = "block";
    
    // Bölüme yumuşak kaydırma
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  aboutLink?.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(aboutSection);
  });

  contactLink?.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(contactSection);
  });

  aboutBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(aboutSection);
  });
}

// Products.html için
function initProductsPage() {
  updateYear();
  
  (function () {
    const cartCountEl = document.querySelector("[data-cart-count]");
    const toastEl = document.getElementById("cart-toast");
    const cartButtons = document.querySelectorAll("[data-cart-button]");
    const cartToggle = document.getElementById("cart-toggle");
    const cartClose = document.getElementById("cart-close");
    const cartPanel = document.getElementById("cart-panel");
    const cartOverlay = document.getElementById("cart-overlay");
    const cartList = document.querySelector("[data-cart-list]");
    const cartEmpty = document.querySelector("[data-cart-empty]");
    const cartTotal = document.querySelector("[data-cart-total]");
    const cartShippingEl = document.querySelector("[data-cart-shipping]");
    const cartGrandTotalEl = document.querySelector("[data-cart-grandtotal]");
    let cartItems = [];
    let toastTimer = null;
    const toastText = document.querySelector("[data-toast-text]");
    const toastPrice = document.querySelector("[data-toast-price]");
    const continueShoppingBtn = document.getElementById("continue-shopping");
    const goToCartBtn = document.getElementById("go-to-cart");
    const cartNameEl = document.querySelector("[data-cart-name]");
    const cartPhoneEl = document.querySelector("[data-cart-phone]");
    const cartStreetEl = document.querySelector("[data-cart-street]");
    const editAddressBtn = document.getElementById("edit-address");
    const defaultAddress = {
      name: "Ad Soyad",
      phone: "+90 --- --- -- --",
      street: "Teslimat adresi henüz eklenmedi.",
    };
    let customerAddress = { ...defaultAddress };
    
    function syncAddress() {
      if (cartNameEl) cartNameEl.textContent = customerAddress.name;
      if (cartPhoneEl) cartPhoneEl.textContent = customerAddress.phone;
      if (cartStreetEl) cartStreetEl.textContent = customerAddress.street;
    }
    syncAddress();

    const currency = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    });

    function openCart(fullView = false) {
      if (!cartPanel) return;
      cartPanel.classList.add("show");
      if (fullView) {
        document.body.classList.add("cart-fullscreen");
        if (cartOverlay) cartOverlay.classList.remove("show");
      } else {
        document.body.classList.remove("cart-fullscreen");
        if (cartOverlay) cartOverlay.classList.add("show");
      }
    }

    function closeCart() {
      if (!cartPanel) return;
      cartPanel.classList.remove("show");
      if (cartOverlay) cartOverlay.classList.remove("show");
      document.body.classList.remove("cart-fullscreen");
    }

    cartToggle?.addEventListener("click", () => openCart(false));
    cartClose?.addEventListener("click", closeCart);
    cartOverlay?.addEventListener("click", closeCart);

    function getCartCount() {
      return cartItems.reduce((sum, item) => sum + item.quantity, 0);
    }

    function renderCart() {
      if (!cartList || !cartEmpty || !cartTotal) return;
      if (cartCountEl) cartCountEl.textContent = getCartCount();
      cartList.innerHTML = "";
      if (cartItems.length === 0) {
        cartEmpty.style.display = "block";
        cartTotal.textContent = "Ürünler: 0 TL";
        if (cartShippingEl) cartShippingEl.textContent = "0 TL";
        if (cartGrandTotalEl) cartGrandTotalEl.textContent = "Toplam: 0 TL";
        return;
      }

      cartEmpty.style.display = "none";
      let total = 0;
      cartItems.forEach((item, index) => {
        const lineTotal = item.price * item.quantity;
        total += lineTotal;
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
          <div>
            <p class="cart-item-name">${item.name}</p>
            <span class="cart-item-price">Birim: ${currency.format(item.price)}</span>
            <span class="cart-item-subtotal">Toplam: ${currency.format(lineTotal)}</span>
          </div>
          <div class="cart-item-actions">
            <div class="qty-control">
              <button class="qty-btn" data-qty data-action="decrease" data-index="${index}">-</button>
              <span class="qty-value">${item.quantity}</span>
              <button class="qty-btn" data-qty data-action="increase" data-index="${index}">+</button>
            </div>
            <button class="cart-item-remove" aria-label="Ürünü sepetten çıkar" data-remove="${index}">✕</button>
          </div>
        `;
        cartList.appendChild(li);
      });
      cartTotal.textContent = `Ürünler: ${currency.format(total)}`;
      const shipping = total >= 1000 ? 0 : 49;
      if (cartShippingEl) {
        cartShippingEl.textContent = shipping === 0 ? "Ücretsiz" : currency.format(shipping);
      }
      if (cartGrandTotalEl) {
        cartGrandTotalEl.textContent = `Toplam: ${currency.format(total + shipping)}`;
      }

      cartList.querySelectorAll("[data-remove]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.dataset.remove);
          cartItems.splice(idx, 1);
          if (cartCountEl) cartCountEl.textContent = getCartCount();
          renderCart();
        });
      });

      cartList.querySelectorAll("[data-qty]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.dataset.index);
          const action = btn.dataset.action;
          const item = cartItems[idx];
          if (!item) return;
          if (action === "increase") {
            item.quantity += 1;
          } else if (action === "decrease") {
            if (item.quantity > 1) {
              item.quantity -= 1;
            } else {
              cartItems.splice(idx, 1);
            }
          }
          if (cartCountEl) cartCountEl.textContent = getCartCount();
          renderCart();
        });
      });
    }

    continueShoppingBtn?.addEventListener("click", () => {
      if (toastEl) toastEl.classList.remove("show");
    });

    goToCartBtn?.addEventListener("click", () => openCart(true));

    editAddressBtn?.addEventListener("click", () => {
      const fullName = window.prompt("Ad soyad:", customerAddress.name);
      if (fullName === null) return;
      const phone = window.prompt("Telefon (5xx ...):", customerAddress.phone);
      if (phone === null) return;
      const street = window.prompt("Teslimat adresi:", customerAddress.street);
      if (street === null) return;
      customerAddress = {
        name: fullName.trim() || defaultAddress.name,
        phone: phone.trim() || defaultAddress.phone,
        street: street.trim() || defaultAddress.street,
      };
      syncAddress();
    });

    cartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const price = Number(button.dataset.price || 0);
        const productName = button.dataset.product || "Ürün";
        const existing = cartItems.find((item) => item.name === productName);
        if (existing) {
          existing.quantity += 1;
        } else {
          cartItems.push({ name: productName, price, quantity: 1 });
        }
        renderCart();

        if (cartCountEl) {
          cartCountEl.textContent = getCartCount();
        }

        if (toastEl) {
          if (toastText) toastText.textContent = `${productName} sepete eklendi`;
          if (toastPrice) toastPrice.textContent = currency.format(price);
          toastEl.classList.add("show");
          if (toastTimer) {
            clearTimeout(toastTimer);
          }
          toastTimer = setTimeout(() => {
            if (toastEl) toastEl.classList.remove("show");
          }, 2000);
        }
        openCart();
      });
    });

    // Alışverişi Tamamla butonu
    const checkoutBtn = document.querySelector(".checkout-btn");
    checkoutBtn?.addEventListener("click", () => {
      if (cartItems.length === 0) {
        alert("Sepetiniz boş!");
        return;
      }
      // Sepet verilerini localStorage'a kaydet
      localStorage.setItem("meloraCart", JSON.stringify(cartItems));
      localStorage.setItem("meloraAddress", JSON.stringify(customerAddress));
      // Ödeme sayfasına yönlendir
      window.location.href = "checkout.html";
    });

    // Giriş durumunu kontrol et
    checkAuthStatus();

    // Kategori filtreleme
    const categoryFilterBtn = document.getElementById("category-filter-btn");
    const categoryPanel = document.getElementById("category-panel");
    const categoryOptions = document.querySelectorAll(".category-option");
    const productCards = document.querySelectorAll("[data-product-category]");

    function filterProducts(category) {
      productCards.forEach((card) => {
        if (category === "all" || card.dataset.productCategory === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    categoryFilterBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      categoryPanel?.classList.toggle("show");
    });

    categoryOptions.forEach((option) => {
      option.addEventListener("click", () => {
        const category = option.dataset.category;
        categoryOptions.forEach((opt) => opt.classList.remove("active"));
        option.classList.add("active");
        filterProducts(category);
        categoryPanel?.classList.remove("show");
      });
    });

    document.addEventListener("click", (e) => {
      if (categoryPanel && !categoryPanel.contains(e.target) && !categoryFilterBtn?.contains(e.target)) {
        categoryPanel.classList.remove("show");
      }
    });
  })();
}

// Account.html için
function initAccountPage() {
  updateYear();

  // Kullanıcı bilgilerini yükle
  const userData = JSON.parse(localStorage.getItem("meloraUser") || "{}");
  const profileNameEl = document.getElementById("profile-name");
  const profileEmailEl = document.getElementById("profile-email");
  const profilePhoneEl = document.getElementById("profile-phone");
  
  if (userData.name && profileNameEl) {
    profileNameEl.value = userData.name || "";
  }
  if (userData.email && profileEmailEl) {
    profileEmailEl.value = userData.email || "";
  }
  if (userData.phone && profilePhoneEl) {
    profilePhoneEl.value = userData.phone || "";
  }

  // Profil güncelleme
  const profileForm = document.getElementById("profile-form");
  profileForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };
    localStorage.setItem("meloraUser", JSON.stringify(updatedData));
    alert("Bilgileriniz güncellendi!");
  });

  // Çıkış yap
  const logoutBtn = document.getElementById("logout-btn");
  logoutBtn?.addEventListener("click", () => {
    if (confirm("Çıkış yapmak istediğinize emin misiniz?")) {
      localStorage.removeItem("meloraUser");
      localStorage.removeItem("meloraLoggedIn");
      localStorage.removeItem("meloraCart");
      localStorage.removeItem("meloraAddress");
      window.location.href = "index.html";
    }
  });

  // Hesap navigasyonu
  document.querySelectorAll(".account-nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = link.dataset.section;
      document.querySelectorAll(".account-nav-link").forEach((l) => l.classList.remove("active"));
      document.querySelectorAll(".account-section").forEach((s) => s.classList.remove("active"));
      link.classList.add("active");
      const targetSection = document.getElementById(`${section}-section`);
      if (targetSection) targetSection.classList.add("active");
    });
  });

  // Adres yönetimi
  const addressesList = document.getElementById("addresses-list");
  const addressFormContainer = document.getElementById("address-form-container");
  const addAddressBtn = document.getElementById("add-address-btn");
  const cancelAddressBtn = document.getElementById("cancel-address-btn");
  const addressForm = document.getElementById("address-form");

  // Kayıtlı adresleri yükle
  function loadAddresses() {
    const savedAddresses = JSON.parse(localStorage.getItem("meloraAddresses") || "[]");
    if (!addressesList) return;
    
    if (savedAddresses.length === 0) {
      addressesList.innerHTML = '<p class="empty-state">Henüz kayıtlı adresiniz bulunmamaktadır.</p>';
      return;
    }
    addressesList.innerHTML = "";
    savedAddresses.forEach((address, index) => {
      const addressCard = document.createElement("div");
      addressCard.className = "address-card";
      addressCard.innerHTML = `
        <div class="address-card-content">
          <h4>${address.title}</h4>
          <p>${address.street}</p>
          <p>${address.district}, ${address.city} ${address.postal}</p>
        </div>
        <button type="button" class="address-delete-btn" data-index="${index}">Sil</button>
      `;
      addressesList.appendChild(addressCard);
    });
    
    // Sil butonlarına event listener ekle
    addressesList.querySelectorAll(".address-delete-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = Number(btn.dataset.index);
        const savedAddresses = JSON.parse(localStorage.getItem("meloraAddresses") || "[]");
        savedAddresses.splice(index, 1);
        localStorage.setItem("meloraAddresses", JSON.stringify(savedAddresses));
        loadAddresses();
      });
    });
  }

  // Yeni adres ekle butonu
  addAddressBtn?.addEventListener("click", () => {
    if (addressFormContainer) addressFormContainer.style.display = "block";
    if (addAddressBtn) addAddressBtn.style.display = "none";
    if (addressForm) addressForm.reset();
  });

  // İptal butonu
  cancelAddressBtn?.addEventListener("click", () => {
    if (addressFormContainer) addressFormContainer.style.display = "none";
    if (addAddressBtn) addAddressBtn.style.display = "block";
    if (addressForm) addressForm.reset();
  });

  // Adres formu gönderimi
  addressForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newAddress = {
      title: formData.get("title"),
      city: formData.get("city"),
      district: formData.get("district"),
      postal: formData.get("postal"),
      street: formData.get("street"),
    };
    
    const savedAddresses = JSON.parse(localStorage.getItem("meloraAddresses") || "[]");
    savedAddresses.push(newAddress);
    localStorage.setItem("meloraAddresses", JSON.stringify(savedAddresses));
    
    if (addressFormContainer) addressFormContainer.style.display = "none";
    if (addAddressBtn) addAddressBtn.style.display = "block";
    if (addressForm) addressForm.reset();
    loadAddresses();
    alert("Adres başarıyla kaydedildi!");
  });

  // Sayfa yüklendiğinde adresleri yükle
  loadAddresses();
}

// Login.html için
function initLoginPage() {
  updateYear();
  
  const loginForm = document.getElementById("login-form");
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    
    // Kullanıcı bilgilerini localStorage'a kaydet
    const userData = {
      email: email,
      name: email.split("@")[0], // E-postadan isim türet
      loginTime: new Date().toISOString(),
    };
    localStorage.setItem("meloraUser", JSON.stringify(userData));
    localStorage.setItem("meloraLoggedIn", "true");
    
    alert("Giriş başarılı! Yönlendiriliyorsunuz...");
    window.location.href = "products.html";
  });
}

// Signup.html için
function initSignupPage() {
  updateYear();
  
  const signupForm = document.getElementById("signup-form");
  signupForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const password = formData.get("password");
    const passwordConfirm = formData.get("passwordConfirm");
    if (password !== passwordConfirm) {
      alert("Şifreler eşleşmiyor!");
      return;
    }
    
    // Kullanıcı bilgilerini localStorage'a kaydet
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      signupTime: new Date().toISOString(),
    };
    localStorage.setItem("meloraUser", JSON.stringify(userData));
    localStorage.setItem("meloraLoggedIn", "true");
    
    alert("Üyelik başarıyla oluşturuldu! Yönlendiriliyorsunuz...");
    window.location.href = "products.html";
  });
}

// Checkout.html için
function initCheckoutPage() {
  updateYear();

  // URL'den sepet verilerini al (localStorage veya URL params)
  const cartData = JSON.parse(localStorage.getItem("meloraCart") || "[]");
  const cartAddress = JSON.parse(localStorage.getItem("meloraAddress") || "{}");

  const currency = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  });

  // Sipariş özetini göster
  function renderOrderSummary() {
    const orderItemsEl = document.getElementById("order-items");
    const orderSubtotalEl = document.getElementById("order-subtotal");
    const orderShippingEl = document.getElementById("order-shipping");
    const orderGrandtotalEl = document.getElementById("order-grandtotal");

    if (!orderItemsEl) return;

    if (cartData.length === 0) {
      orderItemsEl.innerHTML = "<p>Sipariş bulunamadı. <a href='products.html'>Alışverişe dön</a></p>";
      return;
    }

    let subtotal = 0;
    orderItemsEl.innerHTML = "";
    cartData.forEach((item) => {
      const lineTotal = item.price * item.quantity;
      subtotal += lineTotal;
      const li = document.createElement("div");
      li.className = "order-item";
      li.innerHTML = `
        <div>
          <strong>${item.name}</strong>
          <span>${item.quantity} adet × ${currency.format(item.price)}</span>
        </div>
        <span>${currency.format(lineTotal)}</span>
      `;
      orderItemsEl.appendChild(li);
    });

    const shipping = subtotal >= 1000 ? 0 : 49;
    const grandtotal = subtotal + shipping;

    if (orderSubtotalEl) orderSubtotalEl.textContent = currency.format(subtotal);
    if (orderShippingEl) orderShippingEl.textContent = shipping === 0 ? "Ücretsiz" : currency.format(shipping);
    if (orderGrandtotalEl) orderGrandtotalEl.textContent = currency.format(grandtotal);
  }

  // Teslimat bilgilerini doldur
  const deliveryNameEl = document.getElementById("delivery-name");
  const deliveryPhoneEl = document.getElementById("delivery-phone");
  const deliveryAddressEl = document.getElementById("delivery-address");
  
  if (cartAddress.name && deliveryNameEl) {
    deliveryNameEl.value = cartAddress.name;
  }
  if (cartAddress.phone && deliveryPhoneEl) {
    deliveryPhoneEl.value = cartAddress.phone;
  }
  if (cartAddress.street && deliveryAddressEl) {
    deliveryAddressEl.value = cartAddress.street;
  }

  // Ödeme yöntemi değiştiğinde
  document.querySelectorAll('input[name="payment"]').forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const cardDetails = document.getElementById("card-details");
      if (cardDetails) {
        if (e.target.value === "credit-card") {
          cardDetails.style.display = "block";
        } else {
          cardDetails.style.display = "none";
        }
      }
    });
  });

  // Fatura bilgileri checkbox
  const sameAsDeliveryEl = document.getElementById("same-as-delivery");
  sameAsDeliveryEl?.addEventListener("change", (e) => {
    const billingForm = document.getElementById("billing-form");
    if (billingForm) {
      billingForm.style.display = e.target.checked ? "none" : "block";
    }
  });

  // Kart numarası formatla
  const cardNumberEl = document.getElementById("card-number");
  cardNumberEl?.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\s/g, "");
    value = value.match(/.{1,4}/g)?.join(" ") || value;
    e.target.value = value;
  });

  // Son kullanma tarihi formatla
  const cardExpiryEl = document.getElementById("card-expiry");
  cardExpiryEl?.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    e.target.value = value;
  });

  // CVV sadece sayı
  const cardCvvEl = document.getElementById("card-cvv");
  cardCvvEl?.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  });

  // Siparişi tamamla
  const completeOrderBtn = document.getElementById("complete-order");
  completeOrderBtn?.addEventListener("click", () => {
    const deliveryForm = document.getElementById("delivery-form");
    if (!deliveryForm || !deliveryForm.checkValidity()) {
      if (deliveryForm) deliveryForm.reportValidity();
      return;
    }

    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    if (paymentMethod && paymentMethod.value === "credit-card") {
      const cardNumber = document.getElementById("card-number")?.value;
      const cardExpiry = document.getElementById("card-expiry")?.value;
      const cardCvv = document.getElementById("card-cvv")?.value;
      if (!cardNumber || !cardExpiry || !cardCvv) {
        alert("Lütfen kart bilgilerini eksiksiz doldurun.");
        return;
      }
    }

    alert("Siparişiniz alındı! Teşekkür ederiz.");
    localStorage.removeItem("meloraCart");
    localStorage.removeItem("meloraAddress");
    window.location.href = "products.html";
  });

  renderOrderSummary();
  checkAuthStatus();
}

// Sayfa yüklendiğinde ilgili fonksiyonu çalıştır
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  
  if (currentPage === "index.html" || currentPage === "") {
    initIndexPage();
  } else if (currentPage === "products.html") {
    initProductsPage();
  } else if (currentPage === "account.html") {
    initAccountPage();
  } else if (currentPage === "login.html") {
    initLoginPage();
  } else if (currentPage === "signup.html") {
    initSignupPage();
  } else if (currentPage === "checkout.html") {
    initCheckoutPage();
  }
});

