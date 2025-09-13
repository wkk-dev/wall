<script setup>
import { ref } from 'vue'
import RankingManager from './admin/RankingManager.vue'
import StarManager from './admin/StarManager.vue'
import CollectiveManager from './admin/CollectiveManager.vue'
import ClassManager from './admin/ClassManager.vue'
import DormitoryManager from './admin/DormitoryManager.vue'
import OtherManager from './admin/OtherManager.vue'

// 当前选中的管理页面
const currentPage = ref('rankings')

// 切换管理页面
const changePage = (page) => {
  currentPage.value = page
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- 管理员头部导航 -->
    <header class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-6 shadow-md">
      <div class="container mx-auto">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <i class="fas fa-trophy text-yellow-400 text-2xl mr-2"></i>
            <h1 class="text-xl font-bold">荣誉墙管理系统</h1>
          </div>
          <div>
            <span class="inline-flex items-center">
              <i class="fas fa-user-circle text-xl mr-2"></i>
              管理员
            </span>
          </div>
        </div>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <div class="container mx-auto p-4">
      <div class="flex flex-col md:flex-row">
        <!-- 左侧功能菜单 -->
        <aside class="w-full md:w-64 mb-6 md:mb-0 md:mr-6">
          <nav class="bg-white rounded-lg shadow-md p-4">
            <ul class="space-y-1">
              <li>
                <button
                  @click="changePage('rankings')"
                  class="w-full text-left px-4 py-2 rounded-md flex items-center hover:bg-blue-50 transition-colors"
                  :class="currentPage === 'rankings' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'"
                >
                  <i class="fas fa-chart-line w-5 mr-2"></i>
                  积分排行榜管理
                </button>
              </li>
              <li>
                <button
                  @click="changePage('weeklyStars')"
                  class="w-full text-left px-4 py-2 rounded-md flex items-center hover:bg-blue-50 transition-colors"
                  :class="currentPage === 'weeklyStars' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'"
                >
                  <i class="fas fa-star w-5 mr-2"></i>
                  每周优秀之星管理
                </button>
              </li>
              <li>
                <button
                  @click="changePage('studyStars')"
                  class="w-full text-left px-4 py-2 rounded-md flex items-center hover:bg-blue-50 transition-colors"
                  :class="currentPage === 'studyStars' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'"
                >
                  <i class="fas fa-book w-5 mr-2"></i>
                  学习之星管理
                </button>
              </li>
              <li>
                <button
                  @click="changePage('collectives')"
                  class="w-full text-left px-4 py-2 rounded-md flex items-center hover:bg-blue-50 transition-colors"
                  :class="currentPage === 'collectives' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'"
                >
                  <i class="fas fa-users w-5 mr-2"></i>
                  最美集体管理
                </button>
              </li>
              <li>
                <button
                  @click="changePage('classes')"
                  class="w-full text-left px-4 py-2 rounded-md flex items-center hover:bg-blue-50 transition-colors"
                  :class="currentPage === 'classes' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'"
                >
                  <i class="fas fa-school w-5 mr-2"></i>
                  最美班级管理
                </button>
              </li>
              <li>
                <button
                  @click="changePage('dormitories')"
                  class="w-full text-left px-4 py-2 rounded-md flex items-center hover:bg-blue-50 transition-colors"
                  :class="currentPage === 'dormitories' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'"
                >
                  <i class="fas fa-home w-5 mr-2"></i>
                  最美宿舍管理
                </button>
              </li>
              <li>
                <button
                  @click="changePage('otherAwards')"
                  class="w-full text-left px-4 py-2 rounded-md flex items-center hover:bg-blue-50 transition-colors"
                  :class="currentPage === 'otherAwards' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'"
                >
                  <i class="fas fa-medal w-5 mr-2"></i>
                  其他荣誉管理
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <!-- 主内容区域 -->
        <main class="flex-grow">
          <!-- 根据当前选中的页面显示不同的管理组件 -->
          <div v-if="currentPage === 'rankings'" class="bg-white rounded-lg shadow-md p-6">
            <RankingManager />
          </div>
          <div v-else-if="currentPage === 'weeklyStars'" class="bg-white rounded-lg shadow-md p-6">
            <StarManager type="weekly" />
          </div>
          <div v-else-if="currentPage === 'studyStars'" class="bg-white rounded-lg shadow-md p-6">
            <StarManager type="study" />
          </div>
          <div v-else-if="currentPage === 'collectives'" class="bg-white rounded-lg shadow-md p-6">
            <CollectiveManager />
          </div>
          <div v-else-if="currentPage === 'classes'" class="bg-white rounded-lg shadow-md p-6">
            <ClassManager />
          </div>
          <div v-else-if="currentPage === 'dormitories'" class="bg-white rounded-lg shadow-md p-6">
            <DormitoryManager />
          </div>
          <div v-else-if="currentPage === 'otherAwards'" class="bg-white rounded-lg shadow-md p-6">
            <OtherManager />
          </div>
        </main>
      </div>
    </div>

    <!-- 页脚 -->
    <footer class="bg-gray-800 text-white py-4 mt-12">
      <div class="container mx-auto px-4 text-center text-sm text-gray-400">
        <p>© 2023 荣誉墙管理系统. 保留所有权利.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* 响应式调整 */
@media (max-width: 768px) {
  .flex-col.md\:flex-row {
    flex-direction: column;
  }

  .w-full.md\:w-64 {
    width: 100%;
  }
}
</style>