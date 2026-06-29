// Mock Dataset and Default Initial State

const initialRevenueData = [
  { month: "Jan", revenue: 4200, expenses: 2100 },
  { month: "Feb", revenue: 5800, expenses: 2800 },
  { month: "Mar", revenue: 3900, expenses: 1900 },
  { month: "Apr", revenue: 7100, expenses: 3200 },
  { month: "May", revenue: 6400, expenses: 2900 },
  { month: "Jun", revenue: 8300, expenses: 3600 },
  { month: "Jul", revenue: 9500, expenses: 4100 },
];

const initialSalesData = [
  { category: "Electronics", sales: 145 },
  { category: "Clothing", sales: 92 },
  { category: "Books", sales: 68 },
  { category: "Home & Garden", sales: 54 },
  { category: "Sports", sales: 88 },
];

const initialActivities = [
  { id: 1, user: "Leanne Graham", action: "Purchased Enterprise License", time: "10 mins ago", status: "completed" },
  { id: 2, user: "Ervin Howell", action: "Updated Profile Settings", time: "25 mins ago", status: "info" },
  { id: 3, user: "Clementine Bauch", action: "Submitted support ticket #402", time: "1 hour ago", status: "pending" },
  { id: 4, user: "Patricia Lebsack", action: "Renewed annual subscription", time: "3 hours ago", status: "completed" },
];

const fallbackUsers = [
  { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", phone: "1-770-736-8031", company: { name: "Romaguera-Crona" }, status: "Active" },
  { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", phone: "010-692-6593", company: { name: "Deckow-Crist" }, status: "Active" },
  { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", phone: "1-463-123-4447", company: { name: "Romaguera-Jacobson" }, status: "Pending" },
  { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", phone: "493-170-9623", company: { name: "Kale-Deckow" }, status: "Active" },
  { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", phone: "(254)954-1289", company: { name: "Keebler LLC" }, status: "Inactive" },
];

// Main Application Logic (Vanilla JavaScript)

let revenueChartInstance = null;
let salesChartInstance = null;
let currentUsers = [];

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAuth();
  initNavigation();
  initUserManagement();
  initSettings();
});

// Theme Initialization
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const themeToggle = document.getElementById('theme-toggle-check');
  if (themeToggle) {
    themeToggle.checked = savedTheme === 'light';
  }
}

// Authentication Flow
function initAuth() {
  const loginForm = document.getElementById('login-form');
  const loginOverlay = document.getElementById('login-overlay');
  const logoutBtn = document.getElementById('logout-btn');
  
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (isLoggedIn) {
    loginOverlay.classList.add('hidden');
    loadDashboardData();
  }

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();

    if ((user === 'admin' && pass === 'admin123') || user !== '') {
      localStorage.setItem('isLoggedIn', 'true');
      loginOverlay.classList.add('hidden');
      showToast('Logged in successfully!');
      loadDashboardData();
    } else {
      alert('Invalid username or password! Try admin / admin123');
    }
  });

  logoutBtn.addEventListener('click', () => {
    localStorage.setItem('isLoggedIn', 'false');
    loginOverlay.classList.remove('hidden');
    showToast('Logged out successfully.');
  });
}

// Navigation Tab Switching
function initNavigation() {
  const navButtons = document.querySelectorAll('.nav-item button');
  const viewSections = document.querySelectorAll('.view-section');
  const pageTitle = document.getElementById('page-title');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetView = button.getAttribute('data-view');

      navButtons.forEach(btn => btn.parentElement.classList.remove('active'));
      button.parentElement.classList.add('active');

      viewSections.forEach(section => {
        if (section.id === targetView) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });

      pageTitle.textContent = button.textContent.trim();
    });
  });
}

// Load Dashboard Data & Charts
function loadDashboardData() {
  renderCharts();
  renderActivities();
  fetchUsers();
}

// Render Revenue and Category Charts using Chart.js
function renderCharts() {
  const revCtx = document.getElementById('revenueChart');
  const salesCtx = document.getElementById('salesChart');

  if (!revCtx || !salesCtx) return;

  if (revenueChartInstance) revenueChartInstance.destroy();
  if (salesChartInstance) salesChartInstance.destroy();

  const months = initialRevenueData.map(item => item.month);
  const revenues = initialRevenueData.map(item => item.revenue);
  const expenses = initialRevenueData.map(item => item.expenses);

  revenueChartInstance = new Chart(revCtx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Revenue ($)',
          data: revenues,
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99, 102, 241, 0.15)',
          fill: true,
          tension: 0.4
        },
        {
          label: 'Expenses ($)',
          data: expenses,
          borderColor: '#f43f5e',
          backgroundColor: 'transparent',
          borderDash: [5, 5],
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: '#9ca3af' } } },
      scales: {
        x: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.05)' } },
        y: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.05)' } }
      }
    }
  });

  const categories = initialSalesData.map(item => item.category);
  const salesValues = initialSalesData.map(item => item.sales);

  salesChartInstance = new Chart(salesCtx, {
    type: 'bar',
    data: {
      labels: categories,
      datasets: [{
        label: 'Sales Count',
        data: salesValues,
        backgroundColor: ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#9ca3af' }, grid: { display: false } },
        y: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.05)' } }
      }
    }
  });
}

// Render Activity Log
function renderActivities() {
  const activityList = document.getElementById('activity-list');
  if (!activityList) return;

  activityList.innerHTML = initialActivities.map(act => `
    <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--glass-border);">
      <div>
        <strong style="display: block; font-size: 0.9rem;">${act.user}</strong>
        <span style="font-size: 0.8rem; color: var(--text-secondary);">${act.action}</span>
      </div>
      <div style="text-align: right;">
        <span class="badge ${act.status === 'completed' ? 'badge-success' : 'badge-warning'}">${act.status}</span>
        <span style="display: block; font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">${act.time}</span>
      </div>
    </div>
  `).join('');
}

// Fetch and Render User Table
function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      currentUsers = data.map(u => ({ ...u, status: u.id % 2 === 0 ? 'Active' : 'Pending' }));
      renderUserTable(currentUsers);
    })
    .catch(err => {
      console.log('Using fallback user data');
      currentUsers = fallbackUsers;
      renderUserTable(currentUsers);
    });
}

function renderUserTable(users) {
  const tableBody = document.getElementById('users-tbody');
  const userCountSpan = document.getElementById('total-user-count');
  if (!tableBody) return;

  if (userCountSpan) userCountSpan.textContent = users.length;

  if (users.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">No users found.</td></tr>`;
    return;
  }

  tableBody.innerHTML = users.map(user => `
    <tr>
      <td>
        <div style="display: flex; align-items: center; gap: 10px;">
          <div class="avatar" style="width: 32px; height: 32px; font-size: 0.8rem;">${user.name.charAt(0)}</div>
          <div>
            <strong>${user.name}</strong>
            <div style="font-size: 0.75rem; color: var(--text-muted);">@${user.username || 'user'}</div>
          </div>
        </div>
      </td>
      <td>${user.email}</td>
      <td>${user.phone || 'N/A'}</td>
      <td><span class="badge ${user.status === 'Active' ? 'badge-success' : 'badge-warning'}">${user.status || 'Active'}</span></td>
      <td>
        <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 0.75rem;" onclick="deleteUser(${user.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

// User Search & Actions
function initUserManagement() {
  const searchInput = document.getElementById('user-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filtered = currentUsers.filter(u => 
        u.name.toLowerCase().includes(searchTerm) || u.email.toLowerCase().includes(searchTerm)
      );
      renderUserTable(filtered);
    });
  }

  const openAddModalBtn = document.getElementById('open-add-user-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const addUserModal = document.getElementById('add-user-modal');
  const addUserForm = document.getElementById('add-user-form');

  if (openAddModalBtn && addUserModal) {
    openAddModalBtn.addEventListener('click', () => addUserModal.classList.remove('hidden'));
  }
  if (closeModalBtn && addUserModal) {
    closeModalBtn.addEventListener('click', () => addUserModal.classList.add('hidden'));
  }

  if (addUserForm) {
    addUserForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('new-user-name').value;
      const email = document.getElementById('new-user-email').value;
      const phone = document.getElementById('new-user-phone').value;

      const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        username: name.toLowerCase().replace(/\s+/g, ''),
        status: 'Active'
      };

      currentUsers.unshift(newUser);
      renderUserTable(currentUsers);
      addUserModal.classList.add('hidden');
      addUserForm.reset();
      showToast('New user added successfully!');
    });
  }
}

function deleteUser(userId) {
  if (confirm('Are you sure you want to delete this user?')) {
    currentUsers = currentUsers.filter(u => u.id !== userId);
    renderUserTable(currentUsers);
    showToast('User deleted successfully.');
  }
}

// Settings Handlers
function initSettings() {
  const themeToggle = document.getElementById('theme-toggle-check');
  const settingsForm = document.getElementById('settings-form');

  if (themeToggle) {
    themeToggle.addEventListener('change', (e) => {
      const isLight = e.target.checked;
      const newTheme = isLight ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      showToast(`Switched to ${newTheme} theme.`);
    });
  }

  if (settingsForm) {
    settingsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Settings saved successfully!');
    });
  }
}

// Toast Notifications
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
