document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('admin-login-form');
    const adminSection = document.getElementById('admin-section');
    const addProjectForm = document.getElementById('add-project-form');
    const projectListAdmin = document.getElementById('project-list-admin');
    const projectSelect = document.getElementById('project-select');
    const projectList = document.getElementById('project-list');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const user = document.getElementById('admin-username').value;
            const pass = document.getElementById('admin-password').value;
            if (user === "admin" && pass === "admin123") {
                loginForm.style.display = 'none';
                adminSection.style.display = 'block';
            } else {
                alert("Invalid login");
            }
        });
    }

    if (addProjectForm && projectListAdmin) {
        addProjectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('project-name').value;
            const desc = document.getElementById('project-description').value;
            const li = document.createElement('li');
            li.textContent = name + ": " + desc;
            projectListAdmin.appendChild(li);
        });
    }

    if (projectSelect) {
        projectSelect.innerHTML = "<option>Select a project</option><option>AI Chatbot</option><option>Smart Agriculture</option><option>E-Commerce Platform</option>";
    }

    if (projectList) {
        projectList.innerHTML = "<h3>Available Projects</h3><ul><li>AI Chatbot</li><li>Smart Agriculture</li><li>E-Commerce Platform</li></ul>";
    }
});
