// ========================================
// Research Projects Rendering Functions
// ========================================

// Render Single Project
function renderProject(project) {
    const statusBadge = project.status === "Ongoing" 
        ? `<span class="inline-block px-3 py-1 bg-${project.statusColor}-100 text-${project.statusColor}-800 text-xs font-semibold rounded-full">${project.status}</span>`
        : `<span class="inline-block px-3 py-1 bg-${project.statusColor}-100 text-${project.statusColor}-800 text-sm font-medium rounded-full">${project.status}</span>`;

    const specialBadge = project.specialBadge 
        ? `<span class="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">${project.specialBadge}</span>` 
        : '';

    const keyActivitiesHTML = project.keyActivities.length > 0 
        ? `
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Key Activities</h3>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
                ${project.keyActivities.map(activity => `<li>${activity}</li>`).join('\n                ')}
            </ul>
        ` 
        : '';
    
    // Add mb-4 to overview <p> only if there are key activities
    const overviewMargin = project.keyActivities.length > 0 ? 'mb-4' : '';

    const cardClass = project.status === "Ongoing" 
        ? 'bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-visible border-l-4 border-blue-500'
        : 'bg-white rounded-lg shadow-md p-6 ' + (project.expandable ? 'project-card' : '');
    
    const clickHandler = project.expandable ? `onclick="toggleProject('${project.id}')"` : '';

    if (project.status === "Ongoing") {
        // Ongoing project - always expanded, no click
        return `
            <div class="${cardClass}">
                <div class="p-6">
                    <div class="flex items-start justify-between">
                        <div class="flex-1">
                            <div class="flex items-center gap-3 mb-3">
                                ${statusBadge}
                                <span class="text-sm text-gray-500">${project.date}</span>
                            </div>
                            <h2 class="text-2xl font-bold text-gray-900 mb-2">${project.title}</h2>
                            <p class="text-sm text-gray-600 italic mb-3">${project.organization}</p>
                        </div>
                    </div>
                    <div class="mt-4 pt-4 border-t border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
                        <p class="text-gray-700 leading-relaxed ${overviewMargin}">
                            ${project.overview}
                        </p>
                        ${keyActivitiesHTML}
                    </div>
                </div>
            </div>
        `;
    } else {
        // Completed project - expandable
        return `
            <div class="${cardClass}" ${clickHandler}>
                <div class="flex items-start justify-between">
                    <div class="flex-1">
                        <div class="flex items-center gap-3 mb-3">
                            ${statusBadge}
                            ${specialBadge}
                            <span class="text-sm text-gray-500">${project.date}</span>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-900 mb-2">${project.title}</h2>
                        <p class="text-sm text-gray-600 italic mb-3">${project.organization}</p>
                        ${project.expandable ? `
                        <div class="flex items-center text-blue-600 text-sm font-medium">
                            <span>Click to view details</span>
                            <svg class="w-4 h-4 ml-2 expand-icon" id="icon-${project.id}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        ` : ''}
                    </div>
                </div>
                ${project.expandable ? `
                <div class="project-details mt-4 pt-4 border-t border-gray-200" id="details-${project.id}">
                    <h3 class="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
                    <p class="text-gray-700 leading-relaxed ${overviewMargin}">
                        ${project.overview}
                    </p>
                    ${keyActivitiesHTML}
                </div>
                ` : ''}
            </div>
        `;
    }
}

// Initialize Research Projects Page
function initializeResearch() {
    const container = document.getElementById('research-container');
    if (!container) return;

    // Render all projects
    const projectsHTML = researchProjectsData.map(project => renderProject(project)).join('\n');
    container.innerHTML = projectsHTML;
}
