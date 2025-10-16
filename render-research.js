// ========================================
// Research Projects Rendering Functions
// ========================================

// Render Single Project
function renderProject(project) {
    const statusBadge = project.status === "Ongoing" 
        ? `<span class="inline-block px-2 py-1 bg-${project.statusColor}-50 text-${project.statusColor}-700 text-xs font-medium rounded">${project.status}</span>`
        : `<span class="inline-block px-2 py-1 bg-${project.statusColor}-50 text-${project.statusColor}-600 text-xs font-medium rounded">${project.status}</span>`;

    const specialBadge = project.specialBadge 
        ? `<span class="inline-block px-2 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded">${project.specialBadge}</span>` 
        : '';

    const keyActivitiesHTML = project.keyActivities.length > 0 
        ? `
            <div class="mt-2">
                <p class="text-xs font-medium text-gray-700 mb-1">Key Activities:</p>
                <ul class="list-disc list-inside text-gray-600 text-xs space-y-0.5 ml-2">
                    ${project.keyActivities.map(activity => `<li>${activity}</li>`).join('\n                    ')}
                </ul>
            </div>
        ` 
        : '';
    
    const overviewMargin = project.keyActivities.length > 0 ? 'mb-2' : '';

    const borderClass = project.status === "Ongoing" 
        ? 'border-l-3 border-blue-400'
        : 'border-l-2 border-gray-200';
    
    const clickHandler = project.expandable ? `onclick="toggleProject('${project.id}')"` : '';
    const cursorClass = project.expandable ? 'cursor-pointer hover:bg-gray-50' : '';

    if (project.status === "Ongoing") {
        // Ongoing project - always expanded
        return `
            <div class="py-1 px-3 mb-4 ${borderClass} transition-colors">
                <div class="flex items-start justify-between mb-1.5">
                    <div class="flex items-center gap-2">
                        ${statusBadge}
                        <span class="text-xs text-gray-500">${project.date}</span>
                    </div>
                </div>
                <h2 class="text-base font-semibold text-gray-900 mb-0.5 leading-snug">${project.title}</h2>
                <p class="text-xs text-gray-600 mb-2">${project.organization}</p>
                <p class="text-xs text-gray-700 leading-relaxed ${overviewMargin}">
                    ${project.overview}
                </p>
                ${keyActivitiesHTML}
            </div>
        `;
    } else {
        // Completed project - expandable
        return `
            <div class="py-2 px-3 mb-4 ${borderClass} ${cursorClass} transition-colors" ${clickHandler}>
                <div class="flex items-start justify-between mb-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        ${statusBadge}
                        ${specialBadge}
                        <span class="text-xs text-gray-500">${project.date}</span>
                    </div>
                    ${project.expandable ? `
                    <svg class="w-3.5 h-3.5 text-gray-400 expand-icon flex-shrink-0" id="icon-${project.id}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    ` : ''}
                </div>
                <h2 class="text-base font-semibold text-gray-900 mb-0.5 leading-snug">${project.title}</h2>
                <p class="text-xs text-gray-600 mb-1.5">${project.organization}</p>
                ${project.expandable ? `
                <div class="project-details mt-2" id="details-${project.id}">
                    <p class="text-xs text-gray-700 leading-relaxed ${overviewMargin}">
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
