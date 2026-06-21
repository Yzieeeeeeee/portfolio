document.addEventListener('DOMContentLoaded', () => {
    // 1. Get Project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    const project = window.projectsData[projectId];

    if (!project) {
        document.getElementById('project-container').innerHTML = `
            <div class="text-center" style="padding: 100px 0;">
                <h2>Project Not Found</h2>
                <p>The project you are looking for does not exist.</p>
                <a href="index.html" class="btn btn-primary mt-4">Return Home</a>
            </div>
        `;
        return;
    }

    // 2. Populate Page Data
    document.title = `${project.title} | Muhammed Yasir`;
    
    // Hero Section
    document.getElementById('hero-title').textContent = project.title;
    document.getElementById('hero-subtitle').textContent = project.subtitle;
    
    // Tags
    const tagsContainer = document.getElementById('hero-tags');
    const techStackContainer = document.getElementById('tech-stack-container');
    
    project.tags.forEach(tag => {
        // Small hero tags
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
        
        // Stylish Tech Stack tags
        if (techStackContainer) {
            const div = document.createElement('div');
            div.className = 'hover-lift';
            div.style.padding = '0.6rem 1.2rem';
            div.style.borderRadius = 'var(--border-radius-sm)';
            div.style.display = 'flex';
            div.style.alignItems = 'center';
            div.style.gap = '0.5rem';
            div.style.fontSize = '1.05rem';
            div.style.fontWeight = '500';
            div.style.background = 'rgba(255, 255, 255, 0.03)';
            div.style.border = '1px solid rgba(255, 255, 255, 0.05)';
            div.style.cursor = 'default';
            
            let iconClass = 'ph-code gradient-blue';
            const tagLower = tag.toLowerCase();
            if (tagLower.includes('flutter') || tagLower.includes('dart')) iconClass = 'ph-device-mobile gradient-blue';
            else if (tagLower.includes('firebase') || tagLower.includes('cloud') || tagLower.includes('firestore')) iconClass = 'ph-cloud-arrow-up gradient-purple';
            else if (tagLower.includes('api') || tagLower.includes('rest') || tagLower.includes('dio')) iconClass = 'ph-plugs-connected gradient-blue';
            else if (tagLower.includes('ui') || tagLower.includes('design') || tagLower.includes('animation')) iconClass = 'ph-paint-brush-broad gradient-purple';
            else if (tagLower.includes('architecture') || tagLower.includes('riverpod') || tagLower.includes('bloc') || tagLower.includes('state')) iconClass = 'ph-tree-structure gradient-blue';
            else if (tagLower.includes('data')) iconClass = 'ph-chart-bar gradient-purple';
            else if (tagLower.includes('payment')) iconClass = 'ph-credit-card gradient-blue';
            
            div.innerHTML = `<i class="ph ${iconClass}" style="font-size: 1.3rem;"></i> ${tag}`;
            techStackContainer.appendChild(div);
        }
    });

    // Hero Image
    const heroImg = document.getElementById('hero-image');
    heroImg.src = project.heroImage;
    if (project.heroImageType === 'logo') {
        heroImg.style.objectFit = 'contain';
        heroImg.style.padding = '3rem';
        heroImg.style.maxWidth = '500px';
        heroImg.style.margin = '0 auto';
        heroImg.parentElement.style.background = 'radial-gradient(circle at center, rgba(40,40,40,1) 0%, rgba(15,15,15,1) 100%)';
    }
    // --- Dynamic Details Section Generator ---
    let html = '';

    // 1. Overview & Status Bar
    html += `
        <div class="project-overview mb-6 spring-reveal active" style="transition-delay: 0.1s; margin-bottom: 5rem;">
            <h3 class="gradient-blue" style="font-size: 2.2rem; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 2.5rem;">
                <i class="ph ph-info gradient-blue" style="font-size: 2.5rem;"></i> About the Project
            </h3>
            
            <div class="split-grid" style="gap: 3rem; align-items: stretch;">
                <!-- Description Box -->
                <div class="glass-card hover-lift project-overview-box" style="padding: 3rem; border-radius: var(--border-radius-lg); display: flex; align-items: center;">
                    <p class="text-muted m-0" style="font-size: 1.15rem; line-height: 1.9;">
                        ${project.shortDescription}
                    </p>
                </div>
                
                <!-- Metadata Box -->
                <div class="glass-card hover-lift" style="padding: 2.5rem; display: flex; flex-direction: column; justify-content: center; gap: 2rem;">
                    
                    <div style="display: flex; align-items: center; gap: 1.5rem;">
                        <div style="flex-shrink: 0; width: 55px; height: 55px; border-radius: 50%; background: rgba(19, 185, 253, 0.1); display: flex; align-items: center; justify-content: center; border: 1px solid rgba(19, 185, 253, 0.2);">
                            <i class="ph ph-activity gradient-blue" style="font-size: 2rem;"></i>
                        </div>
                        <div>
                            <strong class="text-primary d-block mb-1" style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1.5px;">Status</strong>
                            <span class="text-muted" style="font-size: 1.15rem; font-weight: 500;">${project.projectStatus}</span>
                        </div>
                    </div>
                    
                    <div style="display: flex; align-items: center; gap: 1.5rem;">
                        <div style="flex-shrink: 0; width: 55px; height: 55px; border-radius: 50%; background: rgba(139, 92, 246, 0.1); display: flex; align-items: center; justify-content: center; border: 1px solid rgba(139, 92, 246, 0.2);">
                            <i class="ph ph-clock gradient-purple" style="font-size: 2rem;"></i>
                        </div>
                        <div>
                            <strong class="text-primary d-block mb-1" style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1.5px;">Timeline</strong>
                            <span class="text-muted" style="font-size: 1.15rem; font-weight: 500;">${project.timeline}</span>
                        </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 1.5rem;">
                        <div style="flex-shrink: 0; width: 55px; height: 55px; border-radius: 50%; background: rgba(16, 185, 129, 0.1); display: flex; align-items: center; justify-content: center; border: 1px solid rgba(16, 185, 129, 0.2);">
                            <i class="ph ph-devices" style="color: #10B981; font-size: 2rem;"></i>
                        </div>
                        <div>
                            <strong class="text-primary d-block mb-2" style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1.5px;">Platforms</strong>
                            <div style="display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap;">
                                ${project.platformSupport.map(p => {
                                    let icon = 'ph-device-mobile';
                                    if(p.toLowerCase()==='web') icon = 'ph-browser';
                                    if(p.toLowerCase()==='desktop' || p.toLowerCase()==='windows' || p.toLowerCase()==='macos') icon = 'ph-desktop';
                                    if(p.toLowerCase()==='ios' || p.toLowerCase()==='apple') icon = 'ph-apple-logo';
                                    if(p.toLowerCase()==='android') icon = 'ph-android-logo';
                                    return `<span class="text-muted" title="${p}" style="display: flex; align-items: center; gap: 0.3rem; font-size: 1.05rem; font-weight: 500; background: var(--bg-secondary); padding: 0.3rem 0.8rem; border-radius: 20px; border: 1px solid var(--border-color);"><i class="ph ${icon}"></i> ${p}</span>`;
                                }).join('')}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;

    // 2. Key Features
    if (project.keyFeatures && project.keyFeatures.length > 0) {
        html += `
            <div class="mb-6 spring-reveal active" style="transition-delay: 0.2s; margin-bottom: 5rem;">
                <h3 class="gradient-blue mb-4" style="font-size: 2.2rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="ph ph-star gradient-purple" style="font-size: 2.5rem;"></i> Key Features
                </h3>
                <div class="glass-card aurora-border p-4 hover-lift">
                    <ul style="color: var(--text-muted); font-size: 1.15rem; line-height: 1.8; margin-left: 1.5rem; list-style-type: square;">
                        ${project.keyFeatures.map(f => `<li style="margin-bottom: 0.5rem;">${f}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    // 3. Technical Achievements
    if (project.technicalAchievements && project.technicalAchievements.length > 0) {
        html += `
            <div class="tech-achievements mb-6" style="margin-top: 5rem; margin-bottom: 5rem;">
                <h3 class="gradient-blue mb-4 spring-reveal active" style="font-size: 2.2rem; display: flex; align-items: center; gap: 0.5rem; transition-delay: 0.2s;">
                    <i class="ph ph-rocket-launch gradient-purple" style="font-size: 2.5rem;"></i> Key Technical Achievements
                </h3>
                <div class="achievements-grid">
                    ${project.technicalAchievements.map((achieve, i) => `
                        <div class="spring-reveal active" style="transition-delay: ${0.2 + (i * 0.1)}s;">
                            <div class="hover-lift glass-card p-4 h-100 bento-card spotlight-card">
                                <strong class="text-primary mb-3" style="font-size: 1.25rem; display: flex; align-items: flex-start; gap: 10px; min-height: 4.5rem;">
                                    <i class="ph ${achieve.icon} gradient-purple" style="font-size: 1.8rem; flex-shrink: 0;"></i> 
                                    <span>${achieve.title}</span>
                                </strong>
                                <span class="text-muted" style="line-height: 1.7; display: block; font-size: 1.05rem;">${achieve.description}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // 4. Firebase & Backend Architecture
    if (project.firebaseIntegration || project.backendArchitecture) {
        html += `
            <div class="architecture-section mb-6" style="margin-top: 5rem; margin-bottom: 5rem;">
                <h3 class="gradient-blue mb-4 spring-reveal active" style="font-size: 2.2rem; display: flex; align-items: center; gap: 0.5rem; transition-delay: 0.2s;">
                    <i class="ph ph-hard-drives gradient-blue" style="font-size: 2.5rem;"></i> Architecture & Infrastructure
                </h3>
                <div class="achievements-grid">
        `;
        
        if (project.firebaseIntegration) {
            html += `
                <div class="spring-reveal active" style="transition-delay: 0.3s;">
                    <div class="hover-lift glass-card p-4 h-100 bento-card spotlight-card" style="border-top: 2px solid #FFCA28;">
                        <strong class="text-primary mb-3" style="font-size: 1.25rem; display: flex; align-items: flex-start; gap: 10px; min-height: 3rem;">
                            <i class="ph ph-fire" style="color: #FFCA28; font-size: 1.8rem; flex-shrink: 0;"></i> 
                            <span>${project.firebaseIntegration.title}</span>
                        </strong>
                        <span class="text-muted" style="line-height: 1.7; display: block; font-size: 1.05rem;">${project.firebaseIntegration.description}</span>
                    </div>
                </div>
            `;
        }
        
        if (project.backendArchitecture) {
            html += `
                <div class="spring-reveal active" style="transition-delay: 0.4s;">
                    <div class="hover-lift glass-card p-4 h-100 bento-card spotlight-card">
                        <strong class="text-primary mb-3" style="font-size: 1.25rem; display: flex; align-items: flex-start; gap: 10px; min-height: 3rem;">
                            <i class="ph ph-server gradient-blue" style="font-size: 1.8rem; flex-shrink: 0;"></i> 
                            <span>${project.backendArchitecture.title}</span>
                        </strong>
                        <span class="text-muted" style="line-height: 1.7; display: block; font-size: 1.05rem;">${project.backendArchitecture.description}</span>
                    </div>
                </div>
            `;
        }
        
        html += `
                </div>
            </div>
        `;
    }

    // 5. Deployment Info & Impact
    if (project.deploymentInfo || project.impact) {
        html += `
            <div class="impact-section spring-reveal active" style="transition-delay: 0.5s; margin-top: 5rem; margin-bottom: 4rem;">
                <h3 class="gradient-blue mb-4" style="font-size: 2.2rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="ph ph-target gradient-blue" style="font-size: 2.5rem;"></i> Impact & Deployment
                </h3>
                <div class="glass-card aurora-border spotlight-card hover-lift" style="padding: 2.5rem !important; position: relative;">
                    ${project.deploymentInfo ? `<p class="text-muted mb-3" style="font-size: 1.15rem; line-height: 1.8;"><strong class="text-primary">Deployment:</strong> ${project.deploymentInfo}</p>` : ''}
                    ${project.impact ? `<p class="text-muted m-0" style="font-size: 1.15rem; line-height: 1.8;"><strong class="text-primary">Impact:</strong> ${project.impact}</p>` : ''}
                </div>
            </div>
        `;
    }

    document.getElementById('project-description').innerHTML = html;

    // --- External Links ---
    const downloadBtn = document.getElementById('download-btn');
    if (project.downloadLink && project.downloadLink !== "#") {
        downloadBtn.href = project.downloadLink;
        downloadBtn.setAttribute('download', '');
    } else {
        downloadBtn.textContent = "App Coming Soon";
        downloadBtn.classList.replace('btn-primary', 'btn-secondary');
        downloadBtn.style.pointerEvents = "none";
    }

    // Live Demo and Repo Links injection below title
    const repoContainer = document.createElement('div');
    repoContainer.className = 'spring-reveal mt-3';
    repoContainer.style.display = 'flex';
    repoContainer.style.justifyContent = 'center';
    repoContainer.style.gap = '1rem';
    
    if (project.repoLink && project.repoLink !== "#") {
        repoContainer.innerHTML += `
            <a href="${project.repoLink}" target="_blank" class="btn btn-secondary magnetic-wrap" style="border-radius: 20px; padding: 0.5rem 1.5rem; font-size: 0.95rem;">
                <i class="ph ph-github-logo" style="font-size: 1.2rem;"></i> View Source Code
            </a>
        `;
    }
    if (project.liveDemoLink && project.liveDemoLink !== "#") {
        repoContainer.innerHTML += `
            <a href="${project.liveDemoLink}" target="_blank" class="btn btn-primary magnetic-wrap" style="border-radius: 20px; padding: 0.5rem 1.5rem; font-size: 0.95rem;">
                <i class="ph ph-arrow-square-out" style="font-size: 1.2rem;"></i> Live Demo
            </a>
        `;
    }
    
    // Insert after subtitle
    const subtitle = document.getElementById('hero-subtitle');
    subtitle.parentNode.insertBefore(repoContainer, subtitle.nextSibling);

    // --- Screenshots Grid ---
    const screenshotGrid = document.getElementById('screenshot-grid');
    if (project.screenshots && project.screenshots.length > 0) {
        project.screenshots.forEach(src => {
            const wrap = document.createElement('div');
            wrap.className = 'screenshot-wrap spotlight-card reveal-item';
            
            if (src.endsWith('.mp4') || src.endsWith('.webm')) {
                wrap.innerHTML = `
                    <video src="${src}" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: contain; border-radius: var(--border-radius-md); max-height: 500px; display: block;"></video>
                `;
            } else {
                wrap.innerHTML = `
                    <img src="${src}" alt="Screenshot" style="width: 100%; height: 100%; object-fit: contain; border-radius: var(--border-radius-md); max-height: 500px; display: block;">
                `;
            }
            screenshotGrid.appendChild(wrap);
        });
    } else {
        document.getElementById('screenshots-section').style.display = 'none';
    }

    // Re-initialize animations
    if (window.AnimationManager) {
        setTimeout(() => {
            new window.AnimationManager();
        }, 100);
    }
});
