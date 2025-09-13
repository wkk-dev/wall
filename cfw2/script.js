// 模拟数据
const initialData = {
    rankings: [
        { id: 1, name: '张三', grade: 1, score: 980 },
        { id: 2, name: '李四', grade: 2, score: 950 },
        { id: 3, name: '王五', grade: 3, score: 930 },
        { id: 4, name: '赵六', grade: 1, score: 910 },
        { id: 5, name: '钱七', grade: 2, score: 890 },
        { id: 6, name: '孙八', grade: 3, score: 870 },
        { id: 7, name: '周九', grade: 1, score: 850 },
        { id: 8, name: '吴十', grade: 2, score: 830 },
    ],
    weeklyStars: [
        { id: 1, name: '张三', grade: 1, description: '本周在各项活动中表现突出，获得老师和同学的一致好评' },
        { id: 2, name: '李四', grade: 2, description: '积极参与校园志愿者活动，展现了良好的精神风貌' },
        { id: 3, name: '王五', grade: 3, description: '在学科竞赛中取得优异成绩，为学校争得荣誉' }
    ],
    studyStars: [
        { id: 1, name: '赵六', grade: 1, description: '学习态度认真，成绩优异，多次获得奖学金' },
        { id: 2, name: '钱七', grade: 2, description: '勤奋刻苦，成绩进步显著，是同学们的学习榜样' },
        { id: 3, name: '孙八', grade: 3, description: '在高考复习中表现出色，学习方法值得推广' },
        { id: 4, name: '周九', grade: 1, description: '积极帮助同学解决学习问题，团队合作精神强' }
    ],
    bestClasses: [
        { id: 1, name: '高一(1)班', grade: 1, description: '班级凝聚力强，各项活动表现优异，学习氛围浓厚' },
        { id: 2, name: '高二(3)班', grade: 2, description: '多次获得校级优秀班级称号，综合素质突出' },
        { id: 3, name: '高三(2)班', grade: 3, description: '学习成绩优异，在各类竞赛中表现突出' }
    ],
    bestDorms: [
        { id: 1, name: '男生101宿舍', grade: 1, description: '宿舍环境整洁，室友关系融洽，学习氛围好' },
        { id: 2, name: '女生202宿舍', grade: 1, description: '多次获得校级文明宿舍称号' },
        { id: 3, name: '男生303宿舍', grade: 2, description: '宿舍成员学习成绩优异，互相帮助' },
        { id: 4, name: '女生404宿舍', grade: 2, description: '宿舍文化建设突出，环境温馨舒适' },
        { id: 5, name: '男生505宿舍', grade: 3, description: '高三备考期间，宿舍成员互相鼓励，共同进步' },
        { id: 6, name: '女生606宿舍', grade: 3, description: '学习氛围浓厚，宿舍成员成绩优异' }
    ]
};

// 本地存储键名
const STORAGE_KEY = 'honor_wall_data';

// 获取数据
function getData() {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
        return JSON.parse(storedData);
    } else {
        // 如果没有存储的数据，使用初始数据并保存
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
        return initialData;
    }
}

// 保存数据
function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// 当前选择的年级
let currentGrade = 'all';

// 初始化页面
function initPage() {
    initEventListeners();
    renderAllData();
}

// 初始化事件监听器
function initEventListeners() {
    // 移动端菜单
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // 年级选择器
    const gradeBtns = document.querySelectorAll('.grade-btn');
    gradeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 更新按钮样式
            gradeBtns.forEach(b => {
                b.classList.remove('active', 'bg-primary', 'text-white');
                b.classList.add('bg-white', 'text-gray-700');
            });
            btn.classList.add('active', 'bg-primary', 'text-white');
            btn.classList.remove('bg-white', 'text-gray-700');
            
            // 更新当前年级
            currentGrade = btn.dataset.grade;
            
            // 重新渲染数据
            renderAllData();
        });
    });

    // 管理模态框
    const adminBtn = document.getElementById('admin-btn');
    const mobileAdminBtn = document.getElementById('mobile-admin-btn');
    const adminModal = document.getElementById('admin-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    function openAdminModal() {
        adminModal.classList.remove('hidden');
        renderAdminData();
    }
    
    function closeAdminModal() {
        adminModal.classList.add('hidden');
    }
    
    adminBtn.addEventListener('click', openAdminModal);
    mobileAdminBtn.addEventListener('click', openAdminModal);
    closeModalBtn.addEventListener('click', closeAdminModal);
    
    // 点击模态框外部关闭
    adminModal.addEventListener('click', (e) => {
        if (e.target === adminModal) {
            closeAdminModal();
        }
    });

    // 管理选项卡
    const adminTabs = document.querySelectorAll('.admin-tab');
    const adminTabContents = document.querySelectorAll('.admin-tab-content');
    
    adminTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 更新选项卡样式
            adminTabs.forEach(t => {
                t.classList.remove('active', 'text-primary', 'border-b-2', 'border-primary');
                t.classList.add('text-gray-500');
            });
            tab.classList.add('active', 'text-primary', 'border-b-2', 'border-primary');
            tab.classList.remove('text-gray-500');
            
            // 显示对应的内容
            const tabId = tab.dataset.tab;
            adminTabContents.forEach(content => {
                content.classList.add('hidden');
                content.classList.remove('active');
            });
            
            const activeContent = document.getElementById(`${tabId}-content`);
            if (activeContent) {
                activeContent.classList.remove('hidden');
                activeContent.classList.add('active');
            } else {
                // 如果内容不存在，创建它
                createAdminTabContent(tabId);
            }
        });
    });

    // 添加按钮事件
    document.getElementById('add-ranking-btn').addEventListener('click', () => {
        openEditModal('ranking', null);
    });

    // 编辑模态框
    const editModal = document.getElementById('edit-modal');
    const closeEditModalBtn = document.getElementById('close-edit-modal-btn');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    const editForm = document.getElementById('edit-form');
    
    function closeEditModal() {
        editModal.classList.add('hidden');
        editForm.reset();
    }
    
    closeEditModalBtn.addEventListener('click', closeEditModal);
    cancelEditBtn.addEventListener('click', closeEditModal);
    
    // 点击编辑模态框外部关闭
    editModal.addEventListener('click', (e) => {
        if (e.target === editModal) {
            closeEditModal();
        }
    });

    // 提交编辑表单
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('edit-id').value;
        const type = document.getElementById('edit-type').value;
        const name = document.getElementById('edit-name').value;
        const grade = document.getElementById('edit-grade').value;
        const score = document.getElementById('edit-score').value;
        const description = document.getElementById('edit-description').value;
        
        saveEditedItem(type, id, name, grade, score, description);
        closeEditModal();
    });
}

// 创建管理选项卡内容
function createAdminTabContent(tabId) {
    const adminContent = document.getElementById('admin-content');
    const contentDiv = document.createElement('div');
    contentDiv.id = `${tabId}-content`;
    contentDiv.className = 'admin-tab-content active';
    
    let title = '';
    let addBtnText = '';
    
    switch (tabId) {
        case 'weekly-stars':
            title = '每周优秀之星列表';
            addBtnText = '添加优秀之星';
            break;
        case 'study-stars':
            title = '学习之星列表';
            addBtnText = '添加学习之星';
            break;
        case 'best-classes':
            title = '最美班级列表';
            addBtnText = '添加最美班级';
            break;
        case 'best-dorms':
            title = '最美宿舍列表';
            addBtnText = '添加最美宿舍';
            break;
    }
    
    contentDiv.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <h4 class="font-semibold text-gray-700">${title}</h4>
            <button id="add-${tabId}-btn" class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors">
                ${addBtnText}
            </button>
        </div>
        <div id="${tabId}-data-list" class="space-y-3">
            <!-- 数据项会通过JavaScript动态生成 -->
        </div>
    `;
    
    adminContent.appendChild(contentDiv);
    
    // 添加按钮事件
    document.getElementById(`add-${tabId}-btn`).addEventListener('click', () => {
        openEditModal(tabId, null);
    });
    
    // 渲染数据
    renderAdminDataByType(tabId);
}

// 打开编辑模态框
function openEditModal(type, item) {
    const editModal = document.getElementById('edit-modal');
    const editModalTitle = document.getElementById('edit-modal-title');
    const editId = document.getElementById('edit-id');
    const editType = document.getElementById('edit-type');
    const editName = document.getElementById('edit-name');
    const editGrade = document.getElementById('edit-grade');
    const editScore = document.getElementById('edit-score');
    const editScoreContainer = document.getElementById('edit-score-container');
    const editDescription = document.getElementById('edit-description');
    const editDescriptionContainer = document.getElementById('edit-description-container');
    
    // 设置标题和类型
    if (item) {
        editModalTitle.textContent = '编辑';
        editId.value = item.id;
        editName.value = item.name;
        editGrade.value = item.grade;
        if (item.score) {
            editScore.value = item.score;
        }
        if (item.description) {
            editDescription.value = item.description;
        }
    } else {
        editModalTitle.textContent = '添加';
        editId.value = '';
    }
    editType.value = type;
    
    // 根据类型显示/隐藏不同的字段
    if (type === 'rankings') {
        editScoreContainer.classList.remove('hidden');
        editDescriptionContainer.classList.add('hidden');
    } else {
        editScoreContainer.classList.add('hidden');
        editDescriptionContainer.classList.remove('hidden');
    }
    
    // 显示模态框
    editModal.classList.remove('hidden');
}

// 保存编辑的项目
function saveEditedItem(type, id, name, grade, score, description) {
    const data = getData();
    const itemData = {
        name,
        grade: parseInt(grade)
    };
    
    if (type === 'rankings') {
        itemData.score = parseInt(score);
    } else {
        itemData.description = description;
    }
    
    if (id) {
        // 编辑现有项目
        const index = data[type].findIndex(item => item.id === parseInt(id));
        if (index !== -1) {
            data[type][index] = { ...data[type][index], ...itemData };
        }
    } else {
        // 添加新项目
        const maxId = data[type].length > 0 ? Math.max(...data[type].map(item => item.id)) : 0;
        itemData.id = maxId + 1;
        data[type].push(itemData);
    }
    
    // 保存数据
    saveData(data);
    
    // 重新渲染
    renderAllData();
    renderAdminData();
}

// 删除项目
function deleteItem(type, id) {
    const data = getData();
    data[type] = data[type].filter(item => item.id !== id);
    saveData(data);
    
    // 重新渲染
    renderAllData();
    renderAdminData();
}

// 渲染所有数据
function renderAllData() {
    renderRankings();
    renderWeeklyStars();
    renderStudyStars();
    renderBestClasses();
    renderBestDorms();
}

// 渲染积分排行榜
function renderRankings() {
    const data = getData();
    let rankings = data.rankings;
    
    // 根据年级筛选
    if (currentGrade !== 'all') {
        rankings = rankings.filter(item => item.grade === parseInt(currentGrade));
    }
    
    // 排序并取前5名
    rankings.sort((a, b) => b.score - a.score);
    const top5Rankings = rankings.slice(0, 5);
    
    // 渲染列表
    const rankingList = document.getElementById('ranking-list');
    rankingList.innerHTML = '';
    
    top5Rankings.forEach((item, index) => {
        const rankingItem = document.createElement('div');
        rankingItem.className = 'flex items-center p-3 bg-gray-50 rounded-lg';
        rankingItem.innerHTML = `
            <div class="flex-shrink-0 w-8 h-8 rounded-full ${index < 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center font-bold mr-4">
                ${index + 1}
            </div>
            <div class="flex-grow">
                <div class="flex items-center justify-between">
                    <span class="font-medium">${item.name}</span>
                    <span class="text-primary font-bold">${item.score} 积分</span>
                </div>
                <div class="text-sm text-gray-500">
                    ${getGradeName(item.grade)}
                </div>
            </div>
        `;
        rankingList.appendChild(rankingItem);
    });
    
    // 渲染图表
    renderRankingChart(top5Rankings);
}

// 渲染排行榜图表
function renderRankingChart(rankings) {
    const ctx = document.getElementById('rankingChart').getContext('2d');
    
    // 销毁现有的图表
    if (window.rankingChart) {
        window.rankingChart.destroy();
    }
    
    // 创建新图表
    window.rankingChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: rankings.map(item => item.name),
            datasets: [{
                label: '积分',
                data: rankings.map(item => item.score),
                backgroundColor: rankings.map((_, index) => {
                    const colors = ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE'];
                    return colors[index % colors.length];
                }),
                borderWidth: 0,
                borderRadius: 6,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    padding: 10,
                    cornerRadius: 6,
                    callbacks: {
                        label: function(context) {
                            return `积分: ${context.raw}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// 渲染每周优秀之星
function renderWeeklyStars() {
    const data = getData();
    let stars = data.weeklyStars;
    
    // 根据年级筛选
    if (currentGrade !== 'all') {
        stars = stars.filter(item => item.grade === parseInt(currentGrade));
    }
    
    const container = document.getElementById('weekly-stars-container');
    container.innerHTML = '';
    
    stars.forEach(item => {
        const card = createStarCard(item);
        container.appendChild(card);
    });
    
    // 如果没有数据，显示空状态
    if (stars.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-8 text-gray-500">
                暂无数据
            </div>
        `;
    }
}

// 渲染学习之星
function renderStudyStars() {
    const data = getData();
    let stars = data.studyStars;
    
    // 根据年级筛选
    if (currentGrade !== 'all') {
        stars = stars.filter(item => item.grade === parseInt(currentGrade));
    }
    
    const container = document.getElementById('study-stars-container');
    container.innerHTML = '';
    
    stars.forEach(item => {
        const card = createStarCard(item);
        container.appendChild(card);
    });
    
    // 如果没有数据，显示空状态
    if (stars.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-8 text-gray-500">
                暂无数据
            </div>
        `;
    }
}

// 创建明星卡片
function createStarCard(item) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-md p-6 card-hover';
    card.innerHTML = `
        <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <i class="fa fa-star text-xl text-accent"></i>
            </div>
            <div>
                <h4 class="font-bold text-lg">${item.name}</h4>
                <p class="text-sm text-gray-500">${getGradeName(item.grade)}</p>
            </div>
        </div>
        <p class="text-gray-600 text-sm">${item.description}</p>
    `;
    return card;
}

// 渲染最美班级
function renderBestClasses() {
    const data = getData();
    let classes = data.bestClasses;
    
    // 根据年级筛选
    if (currentGrade !== 'all') {
        classes = classes.filter(item => item.grade === parseInt(currentGrade));
    }
    
    const container = document.getElementById('best-classes-container');
    container.innerHTML = '';
    
    classes.forEach(item => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-md p-6 card-hover';
        card.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-lg">${item.name}</h4>
                <span class="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                    ${getGradeName(item.grade)}
                </span>
            </div>
            <p class="text-gray-600 text-sm">${item.description}</p>
        `;
        container.appendChild(card);
    });
    
    // 如果没有数据，显示空状态
    if (classes.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-8 text-gray-500">
                暂无数据
            </div>
        `;
    }
}

// 渲染最美宿舍
function renderBestDorms() {
    const data = getData();
    let dorms = data.bestDorms;
    
    // 根据年级筛选
    if (currentGrade !== 'all') {
        dorms = dorms.filter(item => item.grade === parseInt(currentGrade));
    }
    
    const container = document.getElementById('best-dorms-container');
    container.innerHTML = '';
    
    dorms.forEach(item => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-md p-6 card-hover';
        card.innerHTML = `
            <h4 class="font-bold text-lg mb-2">${item.name}</h4>
            <p class="text-sm text-gray-500 mb-3">${getGradeName(item.grade)}</p>
            <p class="text-gray-600 text-sm">${item.description}</p>
        `;
        container.appendChild(card);
    });
    
    // 如果没有数据，显示空状态
    if (dorms.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-8 text-gray-500">
                暂无数据
            </div>
        `;
    }
}

// 渲染管理页面数据
function renderAdminData() {
    renderAdminDataByType('rankings');
    
    // 检查其他选项卡内容是否存在，如果存在则渲染
    const tabTypes = ['weekly-stars', 'study-stars', 'best-classes', 'best-dorms'];
    tabTypes.forEach(type => {
        const contentDiv = document.getElementById(`${type}-content`);
        if (contentDiv && !contentDiv.classList.contains('hidden')) {
            renderAdminDataByType(type);
        }
    });
}

// 根据类型渲染管理页面数据
function renderAdminDataByType(type) {
    const data = getData();
    const items = data[type];
    const listContainer = document.getElementById(`${type}-data-list`);
    
    if (!listContainer) return;
    
    listContainer.innerHTML = '';
    
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'flex items-center justify-between p-3 bg-gray-50 rounded-lg';
        
        let itemInfo = '';
        if (type === 'rankings') {
            itemInfo = `
                <div class="flex-grow">
                    <div class="flex items-center justify-between">
                        <span class="font-medium">${item.name}</span>
                        <span class="text-primary font-bold">${item.score} 积分</span>
                    </div>
                    <div class="text-sm text-gray-500">
                        ${getGradeName(item.grade)}
                    </div>
                </div>
            `;
        } else {
            itemInfo = `
                <div class="flex-grow">
                    <div class="flex items-center justify-between">
                        <span class="font-medium">${item.name}</span>
                        <span class="text-sm text-gray-500">${getGradeName(item.grade)}</span>
                    </div>
                    <div class="text-sm text-gray-500 truncate w-64">
                        ${item.description}
                    </div>
                </div>
            `;
        }
        
        itemDiv.innerHTML = `
            ${itemInfo}
            <div class="flex space-x-2">
                <button class="edit-btn text-blue-500 hover:text-blue-700" data-type="${type}" data-id="${item.id}">
                    <i class="fa fa-pencil"></i>
                </button>
                <button class="delete-btn text-red-500 hover:text-red-700" data-type="${type}" data-id="${item.id}">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        `;
        
        listContainer.appendChild(itemDiv);
    });
    
    // 添加编辑和删除按钮的事件监听器
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            const id = parseInt(btn.dataset.id);
            const data = getData();
            const item = data[type].find(item => item.id === id);
            if (item) {
                openEditModal(type, item);
            }
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            const id = parseInt(btn.dataset.id);
            if (confirm('确定要删除这个项目吗？')) {
                deleteItem(type, id);
            }
        });
    });
}

// 获取年级名称
function getGradeName(grade) {
    switch (grade) {
        case 1:
            return '高一年级';
        case 2:
            return '高二年级';
        case 3:
            return '高三年级';
        default:
            return '未知年级';
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initPage);