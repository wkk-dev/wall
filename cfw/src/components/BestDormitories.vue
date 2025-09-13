<script setup>
import { ref, onMounted, watch } from 'vue'
import { getBestDormitories, fetchData } from '../utils/mockData.js'

const props = defineProps({
  grade: {
    type: String,
    default: 'all'
  }
})

const bestDormitories = ref([])
const loading = ref(true)

// 获取最美宿舍数据
const loadBestDormitories = async (currentGrade) => {
  loading.value = true
  try {
    bestDormitories.value = await fetchData(getBestDormitories, currentGrade)
  } catch (error) {
    console.error('获取最美宿舍数据失败:', error)
  } finally {
    loading.value = false
  }
}

// 组件挂载时加载数据
onMounted(() => {
  loadBestDormitories(props.grade)
})

// 监听年级变化
watch(() => props.grade, (newGrade) => {
  loadBestDormitories(newGrade)
})
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden card-shadow h-full">
    <div class="bg-gradient-to-r from-cyan-600 to-blue-600 py-4 px-6">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-white flex items-center">
          <i class="fas fa-home mr-2"></i>
          最美宿舍
        </h2>
        <span class="text-sm text-cyan-100">{{ grade === 'all' ? '全部年级' : grade }}</span>
      </div>
    </div>
    
    <div class="p-4 h-[calc(100%-64px)] flex flex-col">
      <!-- 加载状态 -->
      <div v-if="loading" class="py-10 text-center text-gray-500 flex-grow flex items-center justify-center">
        <i class="fas fa-spinner fa-spin text-xl mr-2"></i>加载中...
      </div>
      
      <!-- 数据列表 -->
      <div v-else-if="bestDormitories.length > 0" class="space-y-4 flex-grow">
        <div 
          v-for="(item, index) in bestDormitories" 
          :key="item.id"
          class="flex items-start p-3 rounded-lg border border-gray-100 hover:border-cyan-200 hover:bg-cyan-50 transition-all"
        >
          <!-- 图标 -->
          <div class="w-14 h-14 rounded-full mr-3 bg-gradient-to-br from-cyan-200 to-blue-200 flex items-center justify-center flex-shrink-0">
            <img 
              :src="item.avatar" 
              :alt="item.name"
              class="w-12 h-12 rounded-full"
            />
          </div>
          
          <!-- 信息 -->
          <div class="flex-grow">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-bold text-gray-800">{{ item.name }}</h3>
              <span class="text-sm font-bold text-cyan-600">{{ item.score }}分</span>
            </div>
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm text-gray-600">
                <i class="fas fa-users text-cyan-500 mr-1"></i>
                {{ item.members }}名成员
              </span>
              <span class="text-xs bg-cyan-100 text-cyan-800 py-1 px-2 rounded-full">{{ item.grade }}</span>
            </div>
            <p class="text-sm text-gray-600">
              <i class="fas fa-star text-cyan-500 mr-1"></i>
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- 无数据状态 -->
      <div v-else class="py-10 text-center text-gray-500 flex-grow flex items-center justify-center">
        <i class="fas fa-info-circle text-xl mr-2"></i>暂无数据
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 响应式调整 */
@media (max-width: 768px) {
  .h-[calc(100%-64px)] {
    height: auto;
  }
}
</style>