<script setup>
import { ref, onMounted, watch } from 'vue'
import { getRankings, fetchData } from '../utils/mockData.js'

const props = defineProps({
  grade: {
    type: String,
    default: 'all'
  }
})

const rankings = ref([])
const loading = ref(true)

// 获取排行榜数据
const loadRankings = async (currentGrade) => {
  loading.value = true
  try {
    rankings.value = await fetchData(getRankings, currentGrade)
  } catch (error) {
    console.error('获取排行榜数据失败:', error)
  } finally {
    loading.value = false
  }
}

// 获取排行榜样式
const getRankStyle = (index) => {
  switch (index) {
    case 0:
      return 'rank-badge gold'
    case 1:
      return 'rank-badge silver'
    case 2:
      return 'rank-badge bronze'
    default:
      return 'rank-badge normal'
  }
}

// 组件挂载时加载数据
onMounted(() => {
  loadRankings(props.grade)
})

// 监听年级变化
watch(() => props.grade, (newGrade) => {
  loadRankings(newGrade)
})
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden card-shadow">
    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 py-4 px-6">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-white flex items-center">
          <i class="fas fa-crown mr-2"></i>
          积分排行榜
        </h2>
        <span class="text-sm text-blue-100">{{ grade === 'all' ? '全部年级' : grade }}</span>
      </div>
    </div>
    
    <div class="p-4">
      <!-- 表头 -->
      <div class="hidden md:flex border-b border-gray-200 pb-2 mb-2 text-gray-600 text-sm font-medium">
        <div class="w-1/12 text-center">排名</div>
        <div class="w-2/12">姓名</div>
        <div class="w-2/12">年级</div>
        <div class="w-2/12">班级</div>
        <div class="w-5/12 text-right">积分</div>
      </div>
      
      <!-- 加载状态 -->
      <div v-if="loading" class="py-10 text-center text-gray-500">
        <i class="fas fa-spinner fa-spin text-xl mr-2"></i>加载中...
      </div>
      
      <!-- 数据列表 -->
      <div v-else-if="rankings.length > 0" class="space-y-3">
        <div 
          v-for="(item, index) in rankings" 
          :key="item.id"
          class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <!-- 排名 -->
          <div class="w-1/12 text-center">
            <span :class="getRankStyle(index)">{{ index + 1 }}</span>
          </div>
          
          <!-- 头像和姓名 -->
          <div class="w-4/12 flex items-center">
            <img 
              :src="item.avatar" 
              :alt="item.name"
              class="w-10 h-10 rounded-full mr-3 border-2 border-white shadow-sm"
            />
            <div class="hidden md:block font-medium text-gray-800">{{ item.name }}</div>
            <div class="md:hidden font-medium text-gray-800 text-sm">{{ item.name }}</div>
          </div>
          
          <!-- 年级 -->
          <div class="hidden md:flex w-2/12 text-gray-600">{{ item.grade }}</div>
          
          <!-- 班级 -->
          <div class="hidden md:flex w-2/12 text-gray-600">{{ item.class }}</div>
          
          <!-- 积分 -->
          <div class="w-5/12 text-right">
            <span class="text-lg font-bold text-blue-600">{{ item.score }}</span>
          </div>
          
          <!-- 移动端显示的简要信息 -->
          <div class="md:hidden w-6/12 pl-2">
            <div class="text-xs text-gray-500">{{ item.grade }}{{ item.class }}</div>
          </div>
        </div>
      </div>
      
      <!-- 无数据状态 -->
      <div v-else class="py-10 text-center text-gray-500">
        <i class="fas fa-info-circle text-xl mr-2"></i>暂无数据
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 响应式调整 */
@media (max-width: 768px) {
  .w-1\/12 {
    width: 15%;
  }
  
  .w-4\/12 {
    width: 40%;
  }
  
  .w-6\/12 {
    width: 45%;
  }
  
  .w-5\/12 {
    width: 45%;
  }
}
</style>