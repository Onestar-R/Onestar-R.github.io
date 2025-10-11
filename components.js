// ========================================
// 공통 설정
// ========================================
const siteConfig = {
    siteName: "HanByul Ryu",
    navigation: [
        { 
            name: "About", 
            href: "about.html",
            submenu: [
                { name: "Intro", href: "about.html#biography-content" },
                { name: "Education", href: "about.html#education-container" },
                { name: "Experiences", href: "about.html#experiences-container" },
                { name: "Awards&Honors", href: "about.html#awards-container" },
                { name: "Skills", href: "about.html#skills-container" }
            ]
        },
        { 
            name: "Research Projects", 
            href: "research.html",
            submenu: [
                { name: "Projects", href: "research.html" }
            ]
        },
        { 
            name: "Publications", 
            href: "publications.html",
            submenu: [
                { name: "Journal", href: "publications.html#journal-papers" },
                { name: "Working", href: "publications.html#working-papers" },
                { name: "Thesis", href: "publications.html#thesis" },
                { name: "Presentations", href: "publications.html#conference-presentations" }
            ]
        },
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
    
    const navItems = siteConfig.navigation.map((item, index) => {
        const isActive = item.href.includes(currentPage) && currentPage !== '';
        const activeClass = isActive ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary';
        
        if (item.submenu && item.submenu.length > 0) {
            const submenuItems = item.submenu.map(subitem => 
                `<a href="${subitem.href}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition">${subitem.name}</a>`
            ).join('');
            
            return `
                <div class="relative dropdown-wrapper">
                    <button class="${activeClass} px-3 py-2 text-sm font-medium transition inline-flex items-center">
                        ${item.name}
                        <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="dropdown-menu absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden">
                        <div class="py-1">
                            ${submenuItems}
                        </div>
                    </div>
                </div>
            `;
        } else {
            return `<a href="${item.href}" class="${activeClass} px-3 py-2 text-sm font-medium transition">${item.name}</a>`;
        }
    }).join('');
    
    const mobileNavItems = siteConfig.navigation.map(item => {
        const isActive = item.href.includes(currentPage) && currentPage !== '';
        const activeClass = isActive ? 'bg-blue-50 text-primary font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-primary';
        
        if (item.submenu && item.submenu.length > 0) {
            const submenuItems = item.submenu.map(subitem => 
                `<a href="${subitem.href}" class="block pl-8 pr-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary">${subitem.name}</a>`
            ).join('');
            
            return `
                <div>
                    <a href="${item.href}" class="${activeClass} block px-3 py-2 rounded-md text-base font-medium">${item.name}</a>
                    ${submenuItems}
                </div>
            `;
        } else {
            return `<a href="${item.href}" class="${activeClass} block px-3 py-2 rounded-md text-base font-medium">${item.name}</a>`;
        }
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
                <div class="md:hidden">
                    <button id="mobile-menu-button" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition">
                        <span class="sr-only">메뉴 열기</span>
                        <!-- Hamburger icon -->
                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile menu -->
        <div id="mobile-menu" class="hidden md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                ${mobileNavItems}
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
    // 모든 링크 클릭 시 처리
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            
            // 해시 부분 추출
            const hashIndex = href.indexOf('#');
            if (hashIndex === -1) return;
            
            const path = href.substring(0, hashIndex);
            const hash = href.substring(hashIndex);
            
            // 같은 페이지 내의 링크인 경우
            const currentPage = window.location.pathname.split('/').pop();
            const targetPage = path.split('/').pop();
            
            if (!path || path === '' || targetPage === currentPage) {
                e.preventDefault();
                const target = document.querySelector(hash);
                if (target) {
                    scrollToTarget(target);
                }
            }
            // 다른 페이지로의 링크는 그대로 진행 (브라우저가 처리)
        });
    });
    
    // 페이지 로드 시 해시가 있으면 해당 위치로 스크롤
    if (window.location.hash) {
        setTimeout(function() {
            const target = document.querySelector(window.location.hash);
            if (target) {
                scrollToTarget(target);
            }
        }, 100);
    }
}

function scrollToTarget(target) {
    const navHeight = 64; // 네비게이션 바 높이 (h-16 = 64px)
    const offset = 0; // 추가 여유 공간 (섹션 시작 전 여백)
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - offset;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

function initializeMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }
        });
        
        // 모바일 메뉴의 링크를 클릭하면 메뉴 닫기
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

function initializeDropdownMenus() {
    const dropdownWrappers = document.querySelectorAll('.dropdown-wrapper');
    
    dropdownWrappers.forEach(wrapper => {
        const button = wrapper.querySelector('button');
        const menu = wrapper.querySelector('.dropdown-menu');
        let hideTimeout;
        
        if (button && menu) {
            // 마우스 오버 시 메뉴 표시
            wrapper.addEventListener('mouseenter', function() {
                // 숨기기 타이머가 있으면 취소
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                }
                menu.classList.remove('hidden');
            });
            
            // 마우스 아웃 시 메뉴 숨기기 (지연 시간 추가)
            wrapper.addEventListener('mouseleave', function() {
                // 300ms 후에 메뉴 숨기기
                hideTimeout = setTimeout(function() {
                    menu.classList.add('hidden');
                }, 300);
            });
            
            // 버튼 클릭 시 해당 페이지로 이동 (페이지 맨 위로)
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const buttonText = button.textContent.trim();
                const parentItem = siteConfig.navigation.find(item => {
                    return buttonText.includes(item.name);
                });
                if (parentItem) {
                    window.location.href = parentItem.href;
                }
            });
        }
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
    
    // 모바일 메뉴 초기화
    setTimeout(initializeMobileMenu, 100);
    
    // 드롭다운 메뉴 초기화
    setTimeout(initializeDropdownMenus, 100);
}
