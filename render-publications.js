// ========================================
// Publications Rendering Functions
// ========================================

// Render Thesis Section
function renderThesis(thesis) {
    return `
        <section id="thesis" class="py-8 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span class="w-1.5 h-6 bg-primary mr-2"></span>
                    Dissertation & Thesis
                </h2>
                
                <div class="py-2 px-3 mb-4 border-l-2 border-gray-200">
                    <h3 class="text-base font-semibold text-gray-900 mb-1 leading-snug">${thesis.title}</h3>
                    <div class="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <span>${thesis.subtitle}</span>
                        <span class="mx-1">•</span>
                        <span>${thesis.institution}</span>
                        <span class="mx-1">•</span>
                        <span>${thesis.date}</span>
                    </div>
                    <p class="text-sm text-gray-700 leading-relaxed mb-3">
                        ${thesis.description}
                    </p>
                    <div class="flex space-x-3">
                        <a href="${thesis.links.pdf}" class="text-primary hover:underline text-sm font-medium flex items-center">
                            <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            PDF
                        </a>
                        <a href="${thesis.links.cite}" class="text-primary hover:underline text-sm font-medium flex items-center">
                            <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            Cite
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Render Single Paper
function renderPaper(paper) {
    const yearColorClass = `${paper.yearColor}-100`;
    const yearTextClass = `${paper.yearColor}-800`;
    const borderClass = 'border-l-2 border-gray-200';
    
    const authors = paper.authors.map(author => {
        // HanByul Ryu 이름을 파랑색으로 강조 (대소문자 구분 없이)
        const nameLower = author.name.toLowerCase();
        if (nameLower.includes('hanbyul ryu')) {
            return `<span class="font-semibold text-primary">${author.name}</span>`;
        }
        return author.name;
    }).join(', ');

    // KCI 태그를 저널명 옆에 표시
    const kciTag = paper.tags.includes("KCI") ? `
        <span class="tooltip-wrapper ml-2">
            <span class="px-1.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">KCI</span>
            <span class="tooltip-text">Korea Citation Index</span>
        </span>` : '';
    
    // KCI 제외한 나머지 태그들
    const otherTags = paper.tags.filter(tag => tag !== "KCI").map(tag => {
        return `<span class="px-1.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">${tag}</span>`;
    }).join('\n                                ');

    const tagsHTML = otherTags ? `
            <div class="flex flex-wrap gap-1.5 mb-2">
                ${otherTags}
            </div>` : '';

    return `
        <div class="py-2 px-3 mb-4 ${borderClass} paper-card" onclick="toggleAbstract('${paper.id}')">
            <div class="flex items-start justify-between mb-1">
                <h3 class="text-base font-semibold text-gray-900 flex-1 pr-4 leading-snug">
                    ${paper.title}
                </h3>
                <span class="text-sm text-gray-500 font-medium flex-shrink-0">${paper.year}</span>
            </div>
            <p class="text-sm text-gray-700 mb-1">
                ${authors}
            </p>
            <p class="text-sm text-gray-600 mb-2 flex items-center">
                ${paper.journal || paper.conference}${kciTag}
            </p>
            ${tagsHTML}
            <div class="flex items-center text-primary text-xs font-medium">
                <span>Click to view abstract</span>
                <svg class="w-3.5 h-3.5 ml-1 expand-icon" id="icon-${paper.id}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
            <div class="abstract-content mt-3 pt-3 border-t border-gray-200" id="abstract-${paper.id}">
                <h4 class="font-semibold text-sm text-gray-900 mb-2">Abstract</h4>
                <p class="text-sm text-gray-700 leading-relaxed mb-3">
                    ${paper.abstract}
                </p>
                <p class="text-sm text-gray-700">
                    <span class="font-semibold">Keywords:</span> ${paper.keywords}
                </p>
            </div>
        </div>
    `;
}

// Render Journal Papers Section
function renderJournalPapers(papers) {
    const papersHTML = papers.map(paper => renderPaper(paper)).join('\n');
    
    return `
        <section id="journal-papers" class="py-8 bg-gray-50">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span class="w-1.5 h-6 bg-primary mr-2"></span>
                    Journal Papers
                </h2>
                <div class="border-t border-gray-200 pt-2">
                    ${papersHTML}
                </div>
            </div>
        </section>
    `;
}

// Render Conference Papers Section
function renderConferencePapers(papers) {
    const papersHTML = papers.map(paper => renderPaper(paper)).join('\n');
    
    return `
        <div class="mb-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span class="w-2 h-8 bg-primary mr-3"></span>
                Conference Papers (Domestic)
            </h2>
            ${papersHTML}
        </div>
    `;
}

// Render International Conference Presentations
function renderInternationalConferences(conferences) {
    const conferencesHTML = conferences.map(conf => {
        const authors = conf.authors.map(author => {
            // HanByul Ryu 이름을 파랑색으로 강조 (대소문자 구분 없이)
            const nameLower = author.name.toLowerCase();
            if (nameLower.includes('hanbyul ryu')) {
                return `<span class="font-semibold text-primary">${author.name}</span>`;
            }
            return author.name;
        }).join(', ');

        return `
            <div class="py-2 px-3 mb-4 border-l-2 border-gray-200">
                <div class="flex items-start justify-between mb-1">
                    <h3 class="text-base font-semibold text-gray-900 flex-1 pr-4 leading-snug">
                        ${conf.title}
                    </h3>
                    <span class="text-sm text-gray-500 font-medium flex-shrink-0">${conf.date}</span>
                </div>
                <p class="text-sm text-gray-700 mb-1">
                    ${authors}
                </p>
                <p class="text-sm text-gray-600">
                    <span class="font-medium">${conf.conference}</span> <span class="mx-1">•</span> ${conf.location}
                </p>
            </div>
        `;
    }).join('\n            ');

    return `
        <section id="conference-presentations" class="py-8 bg-gray-50">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span class="w-1.5 h-6 bg-primary mr-2"></span>
                    Conference Presentations (International)
                </h2>
                <div class="border-t border-gray-200 pt-2">
                    ${conferencesHTML}
                </div>
            </div>
        </section>
    `;
}

// Render Research Focus Section
function renderResearchFocus() {
    return `
        <section class="py-8 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-blue-50 border-l-3 border-primary p-4 rounded-r-lg">
                    <h3 class="text-base font-semibold text-gray-900 mb-2">Research Focus Areas</h3>
                    <p class="text-sm text-gray-700 mb-2">
                        My research primarily focuses on the intersection of operations research, data analytics, 
                        and logistics management. Key areas include:
                    </p>
                    <ul class="list-disc list-inside text-sm text-gray-700 space-y-0.5">
                        <li>Supply Chain Optimization</li>
                        <li>Transportation Network Design</li>
                        <li>Demand Forecasting and Analytics</li>
                        <li>Fair Resource Allocation</li>
                        <li>Last-Mile Logistics</li>
                    </ul>
                </div>
            </div>
        </section>
    `;
}

// Initialize Publications Page
function initializePublications() {
    const container = document.getElementById('publications-container');
    if (!container) return;

    // Render all sections
    const thesisHTML = renderThesis(publicationsData.thesis);
    const journalHTML = renderJournalPapers(publicationsData.journalPapers);
    const intlConfHTML = renderInternationalConferences(publicationsData.internationalConferences);
    const researchFocusHTML = renderResearchFocus();

    container.innerHTML = journalHTML + thesisHTML + intlConfHTML + researchFocusHTML;
}
