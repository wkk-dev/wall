<script setup>
import { ref, onMounted, watch } from 'vue'
import { getBestClasses, fetchData } from '../utils/mockData.js'

const props = defineProps({
  grade: {
    type: String,
    default: 'all'
  }
})

const bestClasses = ref([])
const loading = ref(true)

// 获取最美班级数据
const loadBestClasses = async (currentGrade) => {
  loading.value = true
  try {
    bestClasses.value = await fetchData(getBestClasses, currentGrade)
  } catch (error) {
    console.error('获取最美班级数据失败:', error)
  } finally {
    loading.value = false
  }
}

// 组件挂载时加载数据
onMounted(() => {
  loadBestClasses(props.grade)
})

// 监听年级变化
watch(() => props.grade, (newGrade) => {
  loadBestClasses(newGrade)
})
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden card-shadow h-full">
    <div class="bg-gradient-to-r from-rose-600 to-red-600 py-4 px-6">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-white flex items-center">
          <i class="fas fa-school mr-2"></i>
          最美班级
        </h2>
        <span class="text-sm text-rose-100">{{ grade === 'all' ? '全部年级' : grade }}</span>
      </div>
    </div>
    
    <div class="p-4 h-[calc(100%-64px)] flex flex-col">
      <!-- 加载状态 -->
      <div v-if="loading" class="py-10 text-center text-gray-500 flex-grow flex items-center justify-center">
        <i class="fas fa-spinner fa-spin text-xl mr-2"></i>加载中...
      </div>
      
      <!-- 数据列表 -->
      <div v-else-if="bestClasses.length > 0" class="space-y-4 flex-grow">
        <div 
          v-for="(item, index) in bestClasses" 
          :key="item.id"
          class="flex items-start p-3 rounded-lg border border-gray-100 hover:border-rose-200 hover:bg-rose-50 transition-all"
        >
          <!-- 图标 -->
          <div class="w-14 h-14 rounded-full mr-3 bg-gradient-to-br from-rose-200 to-red-200 flex items-center justify-center flex-shrink-0">
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
              <span class="text-sm font-bold text-rose-600">{{ item.score }}分</span>
            </div>
            <div class="flex justify-between items-center mb-1">
              <span class="text-sm text-gray-600">
                <i class="fas fa-user-tie text-rose-500 mr-1"></i>
                班主任: {{ item.classTeacher }}
              </span>
            </div>
            <p class="text-sm text-gray-600">
              <i class="fas fa-star text-rose-500 mr-1"></i>
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