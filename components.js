// ========================================
// 공통 설정
// ========================================
const siteConfig = {
    siteName: "HanByul Ryu",
    navigation: [
        { name: "About", href: "about.html" },
        { name: "Research Projects", href: "research.html" },
        { name: "Publications", href: "publications.html" },
        { name: "Contact", href: "index.html#contact" }
    ],
    contact: {
        email: "ryu7748@gmail.com",
        phone: "+82 10-9334-7748",
        location: "Graduate School of Logistics<br>Inha University, Incheon, South Korea"
    },
    footer: {
        copyright: "2025 HanByul Ryu. All rights reserved.",
        lastUpdated: "October 2025"
    }
};

// ========================================
// Navigation Component
// ========================================
function createNavigation(currentPage = '') {
    const nav = document.createElement('nav');
    nav.className = 'bg-white border-b border-gray-200 fixed w-full top-0 z-50';
    
    const navItems = siteConfig.navigation.map(item => {
        const isActive = item.href.includes(currentPage) && currentPage !== '';
        const activeClass = isActive ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary';
        return `<a href="${item.href}" class="${activeClass} px-3 py-2 text-sm font-medium transition">${item.name}</a>`;
    }).join('');
    
    nav.innerHTML = `
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex-shrink-0">
                    <a href="index.html" class="text-xl font-semibold text-gray-900">${siteConfig.siteName}</a>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-6">
                        ${navItems}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return nav;
}

// ========================================
// Footer Component
// ========================================
function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'bg-gray-900 text-gray-300 py-8';
    footer.innerHTML = `
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <p>&copy; ${siteConfig.footer.copyright}</p>
                <p class="mt-2 text-sm">Last updated: ${siteConfig.footer.lastUpdated}</p>
            </div>
        </div>
    `;
    return footer;
}

// ========================================
// Contact Section Component
// ========================================
function createContactSection() {
    const section = document.createElement('section');
    section.id = 'contact';
    section.className = 'py-20 bg-white';
    section.innerHTML = `
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-12">Contact</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="flex items-start">
                    <svg class="w-6 h-6 text-primary mr-4 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <div>
                        <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                        <a href="mailto:${siteConfig.contact.email}" class="text-primary hover:underline">${siteConfig.contact.email}</a>
                    </div>
                </div>
                <div class="flex items-start">
                    <svg class="w-6 h-6 text-primary mr-4 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <div>
                        <h3 class="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p class="text-gray-700">${siteConfig.contact.phone}</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <svg class="w-6 h-6 text-primary mr-4 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                    </svg>
                    <div>
                        <h3 class="font-semibold text-gray-900 mb-1">Location</h3>
                        <p class="text-gray-700">${siteConfig.contact.location}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    return section;
}

// ========================================
// 공통 스타일 및 스크립트 설정
// ========================================
function addCommonStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
        }
        
        .card-hover {
            transition: all 0.3s ease;
        }
        
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
    `;
    document.head.appendChild(style);
}

function addSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// 초기화 함수
// ========================================
function initializeComponents(options = {}) {
    const {
        currentPage = '',
        includeContact = false
    } = options;
    
    // Navigation 추가
    const body = document.body;
    const nav = createNavigation(currentPage);
    body.insertBefore(nav, body.firstChild);
    
    // Contact Section 추가 (필요한 경우)
    if (includeContact) {
        const contactSection = createContactSection();
        const footer = body.querySelector('footer');
        if (footer) {
            body.insertBefore(contactSection, footer);
        } else {
            body.appendChild(contactSection);
        }
    }
    
    // Footer 추가
    const existingFooter = body.querySelector('footer');
    if (existingFooter) {
        existingFooter.replaceWith(createFooter());
    } else {
        body.appendChild(createFooter());
    }
    
    // 공통 스타일 추가
    addCommonStyles();
    
    // Smooth Scroll 적용
    setTimeout(addSmoothScroll, 100);
}
