// ========================================
// Publications Rendering Functions
// ========================================

// Render Thesis Section
function renderThesis(thesis) {
    return `
        <section class="py-12 bg-gray-50">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span class="w-2 h-8 bg-primary mr-3"></span>
                    Dissertation & Thesis
                </h2>
                
                <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                    <div class="flex items-start justify-between">
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">${thesis.title}</h3>
                            <div class="flex items-center gap-3 text-sm text-gray-600 mb-4">
                                <span>${thesis.subtitle}</span>
                                <span class="mx-2">•</span>
                                <span>${thesis.institution}</span>
                                <span class="mx-2">•</span>
                                <span>${thesis.date}</span>
                            </div>
                            <p class="text-gray-700 leading-relaxed mb-4">
                                ${thesis.description}
                            </p>
                            <div class="flex space-x-4">
                                <a href="${thesis.links.pdf}" class="text-primary hover:underline font-medium flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                    PDF
                                </a>
                                <a href="${thesis.links.cite}" class="text-primary hover:underline font-medium flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                    Cite
                                </a>
                            </div>
                        </div>
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
    const borderClass = paper.firstAuthor ? 'border-l-4 border-primary' : '';
    
    const authors = paper.authors.map(author => {
        if (author.isFirstAuthor) {
            return `<span class="font-semibold text-primary">${author.name}</span>`;
        }
        return author.name;
    }).join(', ');

    const tags = paper.tags.map(tag => 
        `<span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">${tag}</span>`
    ).join('\n                                ');

    return `
        <div class="bg-white rounded-lg shadow-md p-6 mb-4 ${borderClass} paper-card" onclick="toggleAbstract('${paper.id}')">
            <div class="flex items-start justify-between">
                <div class="flex-1">
                    <div class="flex items-start justify-between mb-2">
                        <h3 class="text-lg font-semibold text-gray-900 flex-1 pr-4">
                            ${paper.title}
                        </h3>
                        <span class="text-sm text-gray-500 font-medium flex-shrink-0">${paper.year}</span>
                    </div>
                    <p class="text-gray-700 mb-2">
                        ${authors}
                    </p>
                    <p class="text-gray-600 mb-3">${paper.journal || paper.conference}</p>
                    <div class="flex flex-wrap gap-2 mb-3">
                        ${tags}
                    </div>
                    <div class="flex items-center text-primary text-sm font-medium">
                        <span>Click to view abstract</span>
                        <svg class="w-4 h-4 ml-2 expand-icon" id="icon-${paper.id}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="abstract-content mt-4 pt-4 border-t border-gray-200" id="abstract-${paper.id}">
                <h4 class="font-semibold text-gray-900 mb-2">Abstract</h4>
                <p class="text-gray-700 leading-relaxed mb-4">
                    ${paper.abstract}
                </p>
                <p class="text-gray-700">
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
        <section class="py-12 bg-gray-50">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span class="w-2 h-8 bg-primary mr-3"></span>
                    Journal Papers
                </h2>
                ${papersHTML}
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

// Render Working Papers Section
function renderWorkingPapers(papers) {
    const papersHTML = papers.map(paper => {
        const authors = paper.authors.map(author => {
            if (author.isFirstAuthor) {
                return `<span class="font-semibold text-primary">${author.name}</span>`;
            }
            return author.name;
        }).join(', ');

        return `
            <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                    ${paper.title}
                </h3>
                <p class="text-gray-700 mb-3">
                    ${authors}
                </p>
                <p class="text-gray-700 leading-relaxed italic">
                    ${paper.description}
                </p>
            </div>
        `;
    }).join('\n        ');

    return `
        <section class="py-12 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span class="w-2 h-8 bg-primary mr-3"></span>
                    Working Papers
                </h2>
                ${papersHTML}
            </div>
        </section>
    `;
}

// Render International Conference Presentations
function renderInternationalConferences(conferences) {
    const conferencesHTML = conferences.map(conf => {
        const authors = conf.authors.map(author => {
            if (author.isFirstAuthor) {
                return `<span class="font-semibold text-primary">${author.name}</span>`;
            }
            return author.name;
        }).join(', ');

        return `
            <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                <div class="flex items-start justify-between mb-2">
                    <h3 class="text-lg font-semibold text-gray-900 flex-1 pr-4">
                        ${conf.title}
                    </h3>
                    <span class="text-sm text-gray-500 font-medium flex-shrink-0">${conf.date}</span>
                </div>
                <p class="text-gray-700 mb-2">
                    ${authors}
                </p>
                <p class="text-gray-600">
                    <span class="font-medium">${conf.conference}</span> <span class="mx-1">•</span> ${conf.location}
                </p>
            </div>
        `;
    }).join('\n            ');

    return `
        <section class="py-12 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span class="w-2 h-8 bg-primary mr-3"></span>
                    Conference Presentations (International)
                </h2>
                ${conferencesHTML}
            </div>
        </section>
    `;
}

// Render Research Focus Section
function renderResearchFocus() {
    return `
        <section class="py-12 bg-gray-50">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 class="text-lg font-semibold text-gray-900 mb-3">Research Focus Areas</h3>
                    <p class="text-gray-700 mb-2">
                        My research primarily focuses on the intersection of operations research, data analytics, 
                        and logistics management. Key areas include:
                    </p>
                    <ul class="list-disc list-inside text-gray-700 space-y-1">
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
    const workingHTML = renderWorkingPapers(publicationsData.workingPapers);
    const intlConfHTML = renderInternationalConferences(publicationsData.internationalConferences);
    const researchFocusHTML = renderResearchFocus();

    container.innerHTML = journalHTML + workingHTML + thesisHTML + intlConfHTML + researchFocusHTML;
}
