<script setup>
import { ref } from 'vue'
import Rankings from './components/Rankings.vue'
import WeeklyStars from './components/WeeklyStars.vue'
import StudyStars from './components/StudyStars.vue'
import BestCollectives from './components/BestCollectives.vue'
import BestClasses from './components/BestClasses.vue'
import BestDormitories from './components/BestDormitories.vue'
import OtherSection from './components/OtherSection.vue'
import AdminPanel from './components/AdminPanel.vue'

// 当前选中的年级
const selectedGrade = ref('2023')

// 是否显示管理员面板
const showAdminPanel = ref(false)

// 切换年级
const changeGrade = (grade) => {
  selectedGrade.value = grade
}

// 切换管理员面板显示状态
const toggleAdminPanel = () => {
  showAdminPanel.value = !showAdminPanel.value
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 头部导航 -->
    <header class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <i class="fas fa-trophy text-yellow-400 text-3xl"></i>
            <h1 class="text-2xl font-bold">荣誉墙</h1>
          </div>
          
          <div class="flex items-center space-x-4">
            <!-- 年级选择器 -->
            <div class="relative">
              <select
                v-model="selectedGrade"
                @change="changeGrade(selectedGrade)"
                class="bg-blue-700 text-white border border-blue-500 rounded-md py-2 pl-3 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="2023">2023级</option>
                <option value="2024">2024级</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <i class="fas fa-chevron-down text-xs"></i>
              </div>
            </div>
            
            <!-- 管理员按钮 -->
            <button
              @click="toggleAdminPanel"
              class="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 transition-colors px-4 py-2 rounded-md"
            >
              <i class="fas fa-user-cog"></i>
              <span>管理员</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="container mx-auto px-4 py-8">
      <!-- 积分排行榜 -->
      <section class="mb-12">
        <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <i class="fas fa-chart-line text-blue-500 mr-2"></i>
            积分排行榜
          </h2>
          <Rankings :grade="selectedGrade" />
        </div>
      </section>

      <!-- 荣誉区域网格布局 -->
      <div class="grid grid-cols-1 gap-8">
        <!-- 每周优秀之星 -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <i class="fas fa-star text-yellow-500 mr-2"></i>
            每周优秀之星
          </h2>
          <WeeklyStars :grade="selectedGrade" />
        </div>

        <!-- 学习之星 -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <i class="fas fa-book text-green-500 mr-2"></i>
            学习之星
          </h2>
          <StudyStars :grade="selectedGrade" />
        </div>

        <!-- 最美集体 -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <i class="fas fa-users text-purple-500 mr-2"></i>
            最美集体
          </h2>
          <BestCollectives :grade="selectedGrade" />
        </div>

        <!-- 最美班级 -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <i class="fas fa-school text-red-500 mr-2"></i>
            最美班级
          </h2>
          <BestClasses :grade="selectedGrade" />
        </div>

        <!-- 最美宿舍 -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <i class="fas fa-home text-cyan-500 mr-2"></i>
            最美宿舍
          </h2>
          <BestDormitories :grade="selectedGrade" />
        </div>

        <!-- 其他荣誉 -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <i class="fas fa-medal text-orange-500 mr-2"></i>
            其他荣誉
          </h2>
          <OtherSection :grade="selectedGrade" />
        </div>
      </div>
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-800 text-white py-6 mt-12">
      <div class="container mx-auto px-4 text-center text-sm">
        <p>© 2023 荣誉墙. 保留所有权利.</p>
      </div>
    </footer>

    <!-- 管理员面板弹窗 -->
    <div v-if="showAdminPanel" class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- 背景遮罩 -->
      <div class="absolute inset-0 bg-black bg-opacity-50" @click="toggleAdminPanel"></div>
      <!-- 管理员面板 -->
      <div class="relative bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-auto">
        <AdminPanel />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 响应式调整 */
@media (max-width: 768px) {
  header .flex.justify-between {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  header select {
    width: 100%;
  }

  header button {
    width: 100%;
    justify-content: center;
  }
}

/* 管理员面板在移动端的响应式宽度 */
@media (max-width: 640px) {
  .fixed.inset-0.z-50.flex.items-center.justify-center > div.relative {
    width: 95%;
  }
}
</style>
