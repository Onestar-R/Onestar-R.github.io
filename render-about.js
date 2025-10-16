// @ts-nocheck
// ========================================
// About Page Rendering Functions
// ========================================

// Render Biography Section
function renderBiography(biography) {
    const paragraphsHTML = biography.paragraphs.map(p => `<p>${p}</p>`).join('\n                        ');
    return `
        <div class="md:col-span-2">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Biography</h2>
            <div class="space-y-4 text-gray-700 leading-relaxed">
                ${paragraphsHTML}
            </div>
        </div>
    `;
}

// Render Education Section
function renderEducation(educationList) {
    const educationHTML = educationList.map(edu => {
        const borderClass = edu.isCurrent ? 'border-l-3 border-blue-500' : 'border-l-2 border-gray-200';
        const dateColor = edu.isCurrent ? 'text-blue-600' : 'text-gray-500';
        
        let content = '';
        if (edu.focus) {
            content = `<p class="text-sm text-gray-700">Focus: ${edu.focus}</p>`;
        } else if (edu.thesis) {
            content = `
                <div class="text-sm text-gray-700 space-y-1.5">
                    <p class="italic">
                        <span class="font-medium">Thesis:</span> ${edu.thesis}
                    </p>
                    <div class="inline-flex items-center px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs font-medium">
                        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        ${edu.award}
                    </div>
                </div>
            `;
        } else if (edu.major) {
            content = `
                <div class="text-sm text-gray-700">
                    <p><span class="font-medium">Major:</span> ${edu.major}</p>
                    ${edu.interdisciplinary ? `<p><span class="font-medium">Interdisciplinary:</span> ${edu.interdisciplinary}</p>` : ''}
                </div>
            `;
        }
        
        return `
            <div class="py-3 px-3 mb-4 ${borderClass}">
                <div class="flex justify-between items-start mb-1">
                    <div>
                        <h3 class="text-base font-semibold text-gray-900 leading-snug">${edu.degree}</h3>
                        <p class="text-sm text-gray-600 mt-0.5">${edu.institution}</p>
                    </div>
                    <span class="text-sm font-medium ${dateColor} flex-shrink-0 ml-2">${edu.date}</span>
                </div>
                ${content}
            </div>
        `;
    }).join('\n            ');
    
    return `
        <section id="education-container" class="py-8 bg-gray-50">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span class="w-1.5 h-6 bg-primary mr-2"></span>
                    Education
                </h2>
                <div class="border-t border-gray-200 pt-2">
                    ${educationHTML}
                </div>
            </div>
        </section>
    `;
}

// Render Single Experience Card
function renderExperienceCard(exp, showBadge = true) {
    const svgIcon = `
        <svg class="w-3.5 h-3.5 text-${exp.categoryColor}-600 mr-1.5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
    `;

    const badgeHTML = showBadge ? `
        <div class="mb-1.5">
            <span class="inline-block px-2 py-0.5 bg-${exp.categoryColor}-50 text-${exp.categoryColor}-700 rounded text-xs font-medium">${exp.category}</span>
        </div>
    ` : '';

    if (exp.isMultiple && exp.entries) {
        // Multiple entries in one card (Lecturer or Club Association)
        const entriesHTML = exp.entries.map((entry, index) => {
            const separator = index > 0 ? '<div class="pt-2 mb-1"><div class="border-t border-gray-200 w-1/3"></div></div><div class="flex justify-between items-start mb-1">' : '<div class="flex justify-between items-start mb-1">';
            const title = entry.position || (index === 0 ? exp.title : '');
            const activities = entry.activities || entry.courses.map(c => c);
            
            const activitiesHTML = activities.map(activity => `
                <li class="flex items-start">
                    ${svgIcon}
                    <span class="text-sm">${activity}</span>
                </li>
            `).join('\n                                ');

            const titleHTML = title ? `<h3 class="text-base font-semibold text-gray-900 leading-snug">${title}</h3>` : '';
            const dateHTML = (entry.position || index === 0) ? `<span class="text-sm font-medium text-gray-500 flex-shrink-0 ml-2">${entry.date}</span>` : '';

            return `
                ${separator}
                    <div>
                        ${titleHTML}
                        <p class="text-sm text-gray-600 ${title ? 'mt-0.5' : ''}"><span class="text-gray-500">${entry.institution}</span></p>
                    </div>
                    ${dateHTML}
                </div>
                <div class="text-gray-700 space-y-1 ${index < exp.entries.length - 1 ? 'mb-2' : ''}">
                    <ul class="list-none space-y-1">
                        ${activitiesHTML}
                    </ul>
                </div>
            `;
        }).join('\n            ');

        return `
            <div class="py-3 px-3 mb-4 border-l-2 border-gray-200">
                ${badgeHTML}
                <div class="flex justify-between items-start">
                    <div class="w-full">
                        ${entriesHTML}
                    </div>
                </div>
            </div>
        `;
    } else {
        // Single entry card
        const activitiesHTML = exp.activities ? exp.activities.map(activity => `
            <li class="flex items-start">
                ${svgIcon}
                <span class="text-sm">${activity}</span>
            </li>
        `).join('\n                        ') : '';

        return `
            <div class="py-3 px-3 mb-4 border-l-2 border-gray-200">
                ${badgeHTML}
                <div class="flex justify-between items-start mb-1">
                    <div>
                        <h3 class="text-base font-semibold text-gray-900 leading-snug">${exp.title}</h3>
                        <p class="text-sm text-gray-600 mt-0.5">${exp.institution}</p>
                    </div>
                    <span class="text-sm font-medium text-gray-500 flex-shrink-0 ml-2">${exp.date}</span>
                </div>
                <div class="text-gray-700 space-y-1">
                    <ul class="list-none space-y-1">
                        ${activitiesHTML}
                    </ul>
                </div>
            </div>
        `;
    }
}

// Render Experiences Section
function renderExperiences(experiences) {
    // Render research experiences
    const researchHTML = experiences.research.map((exp, index) => 
        renderExperienceCard(exp, index === 0)
    ).join('\n            ');
    
    // Render teaching experiences with badge only on first item
    const teachingHTML = experiences.teaching.map((exp, index) => 
        renderExperienceCard(exp, index === 0)
    ).join('\n            ');
    
    // Render extracurricular experiences with badge only on first item
    const extracurricularHTML = experiences.extracurricular.map((exp, index) => 
        renderExperienceCard(exp, index === 0)
    ).join('\n            ');
    
    return `
        <section id="experiences-container" class="py-8 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span class="w-1.5 h-6 bg-primary mr-2"></span>
                    Experiences
                </h2>
                <div class="border-t border-gray-200 pt-2">
                    ${researchHTML}
                    ${teachingHTML}
                    ${extracurricularHTML}
                </div>
            </div>
        </section>
    `;
}

// Render Awards Section
function renderAwards(awards) {
    const conferenceAwardsHTML = awards.conferenceAndPapers.map(award => {
        const badges = award.badges.map(badge => {
            if (badge === "FA") {
                return `
                <span class="tooltip-wrapper ml-1.5">
                    <span class="inline-flex items-center px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                        FA
                    </span>
                    <span class="tooltip-text">First Author</span>
                </span>`;
            } else if (badge === "star") {
                const starColorClass = award.starColor || "yellow-700";
                return `
                <span class="inline-flex items-center px-1 py-0.5 bg-yellow-50 text-${starColorClass} rounded text-xs font-medium ml-1.5">
                    <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                </span>`;
            }
            return '';
        }).join('');

        const titleWithBadges = award.badges.length > 0 ? 
            `${award.title}\n                                ${badges}` : 
            award.title;
        
        const flexClass = award.badges.length > 0 ? ' flex items-center' : '';

        return `
                    <div class="py-1.5 px-3 mb-4">
                        <div class="flex justify-between items-start mb-0.5">
                            <h4 class="text-sm font-semibold text-gray-900${flexClass}">
                                ${titleWithBadges}
                            </h4>
                            <span class="text-sm font-medium text-gray-500 flex-shrink-0 ml-2">${award.month}</span>
                        </div>
                        <p class="text-gray-600 text-sm mb-1">${award.organization}</p>
                        <p class="text-gray-700 text-sm"><span class="font-medium">Title:</span> ${award.paper}</p>
                    </div>`;
    }).join('\n\n');

    const scholarshipsHTML = awards.scholarshipsAndRecognition.map(award => {
        return `
                    <div class="py-1.5 px-3 mb-4 border-l-3 border-${award.borderColor}">
                        <div class="flex justify-between items-start mb-0.5">
                            <h4 class="text-sm font-semibold text-gray-900">${award.title}</h4>
                            <span class="text-sm font-medium text-gray-500 flex-shrink-0 ml-2">${award.year}</span>
                        </div>
                        <p class="text-gray-600 text-sm mb-1">${award.organization}</p>
                        <p class="text-gray-700 text-sm">${award.description}</p>
                    </div>`;
    }).join('\n\n');

    return `
        <section id="awards-container" class="py-8 bg-gray-50">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span class="w-1.5 h-6 bg-primary mr-2"></span>
                    Awards and Honors
                </h2>
                
                <!-- Paper Awards -->
                <div class="mb-6">
                    <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <svg class="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        Conference and Paper Awards
                    </h3>
                    <div class="border-t border-gray-200 pt-2">
${conferenceAwardsHTML}
                    </div>
                </div>

                <!-- Scholarships -->
                <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <svg class="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                        </svg>
                        Scholarships and Recognition
                    </h3>
                    <div class="border-t border-gray-200 pt-2">
${scholarshipsHTML}
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Render Technical Skills Section
function renderTechnicalSkills(skills) {
    const languageHTML = skills.programming.language.map(item => 
        `<span class="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-200">${item}</span>`
    ).join('\n                                    ');

    const statisticsHTML = skills.programming.statistics.map(item => 
        `<span class="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium border border-green-200">${item}</span>`
    ).join('\n                                    ');

    const databaseHTML = skills.programming.database.map(item => 
        `<span class="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium border border-purple-200">${item}</span>`
    ).join('\n                                    ');

    const gisHTML = skills.programming.gis.map(item => 
        `<span class="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs font-medium border border-orange-200">${item}</span>`
    ).join('\n                                    ');

    const optimizationHTML = skills.programming.optimization.map(item => 
        `<span class="px-2 py-1 bg-red-50 text-red-700 rounded text-xs font-medium border border-red-200">${item}</span>`
    ).join('\n                                    ');

    const methodologyHTML = skills.researchMethodology.map(item => 
        `<span class="inline-block bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs font-medium">${item}</span>`
    ).join('\n                    ');

    return `
        <section id="skills-container" class="py-8 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span class="w-1.5 h-6 bg-primary mr-2"></span>
                    Technical Skills
                </h2>
                
                <!-- Programming Languages -->
                <div class="mb-6">
                    <div class="py-3 px-3 border-l-2 border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <svg class="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                            Programming
                        </h3>
                        
                        <div class="grid md:grid-cols-2 gap-4">
                            <!-- Language -->
                            <div class="py-1">
                                <h4 class="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                                    <span class="w-0.5 h-4 bg-blue-500 rounded-full mr-2"></span>
                                    Language
                                </h4>
                                <div class="flex flex-wrap gap-1.5">
                                    ${languageHTML}
                                </div>
                            </div>

                            <!-- Statistics -->
                            <div class="py-1">
                                <h4 class="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                                    <span class="w-0.5 h-4 bg-green-500 rounded-full mr-2"></span>
                                    Statistics
                                </h4>
                                <div class="flex flex-wrap gap-1.5">
                                    ${statisticsHTML}
                                </div>
                            </div>

                            <!-- Database -->
                            <div class="py-1">
                                <h4 class="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                                    <span class="w-0.5 h-4 bg-purple-500 rounded-full mr-2"></span>
                                    Database
                                </h4>
                                <div class="flex flex-wrap gap-1.5">
                                    ${databaseHTML}
                                </div>
                            </div>

                            <!-- GIS -->
                            <div class="py-1">
                                <h4 class="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                                    <span class="w-0.5 h-4 bg-orange-500 rounded-full mr-2"></span>
                                    GIS
                                </h4>
                                <div class="flex flex-wrap gap-1.5">
                                    ${gisHTML}
                                </div>
                            </div>

                            <!-- Optimization -->
                            <div class="py-1 md:col-span-2">
                                <h4 class="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                                    <span class="w-0.5 h-4 bg-red-500 rounded-full mr-2"></span>
                                    Optimization
                                </h4>
                                <div class="flex flex-wrap gap-1.5">
                                    ${optimizationHTML}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Research Methodology -->
                <div class="mb-6">
                    <div class="py-3 px-3 border-l-2 border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <svg class="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                            </svg>
                            Research Methodology
                        </h3>
                        <div class="flex flex-wrap gap-1.5">
                            ${methodologyHTML}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Initialize About Page
function initializeAbout() {
    // Biography (in header section, manually placed)
    // Education
    const educationContainer = document.getElementById('education-container');
    if (educationContainer) {
        educationContainer.outerHTML = renderEducation(aboutData.education);
    }

    // Experiences
    const experiencesContainer = document.getElementById('experiences-container');
    if (experiencesContainer) {
        experiencesContainer.outerHTML = renderExperiences(aboutData.experiences);
    }

    // Awards
    const awardsContainer = document.getElementById('awards-container');
    if (awardsContainer) {
        awardsContainer.outerHTML = renderAwards(aboutData.awards);
    }

    // Technical Skills
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skillsContainer.outerHTML = renderTechnicalSkills(aboutData.technicalSkills);
    }
}
