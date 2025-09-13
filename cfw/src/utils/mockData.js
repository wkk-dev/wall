// 模拟数据服务

// 积分排行榜数据
const rankingsData = [
  { id: 1, name: '张三', grade: '高一', class: '1班', score: 980, avatar: 'https://picsum.photos/id/1/64/64' },
  { id: 2, name: '李四', grade: '高二', class: '3班', score: 960, avatar: 'https://picsum.photos/id/2/64/64' },
  { id: 3, name: '王五', grade: '高三', class: '5班', score: 945, avatar: 'https://picsum.photos/id/3/64/64' },
  { id: 4, name: '赵六', grade: '高一', class: '2班', score: 930, avatar: 'https://picsum.photos/id/4/64/64' },
  { id: 5, name: '孙七', grade: '高二', class: '1班', score: 915, avatar: 'https://picsum.photos/id/5/64/64' },
  { id: 6, name: '周八', grade: '高三', class: '2班', score: 900, avatar: 'https://picsum.photos/id/6/64/64' },
  { id: 7, name: '吴九', grade: '高一', class: '3班', score: 890, avatar: 'https://picsum.photos/id/7/64/64' },
  { id: 8, name: '郑十', grade: '高二', class: '2班', score: 880, avatar: 'https://picsum.photos/id/8/64/64' },
]

// 每周优秀之星数据
const weeklyStarsData = [
  { id: 1, name: '张三', grade: '高一', class: '1班', reason: '在数学竞赛中获得省级一等奖', avatar: 'https://picsum.photos/id/1/64/64' },
  { id: 2, name: '李四', grade: '高二', class: '3班', reason: '校园运动会打破短跑记录', avatar: 'https://picsum.photos/id/2/64/64' },
  { id: 3, name: '王五', grade: '高三', class: '5班', reason: '社区志愿服务表现突出', avatar: 'https://picsum.photos/id/3/64/64' },
]

// 学习之星数据
const studyStarsData = [
  { id: 1, name: '赵六', grade: '高一', class: '2班', subject: '语文', score: 98, avatar: 'https://picsum.photos/id/4/64/64' },
  { id: 2, name: '孙七', grade: '高二', class: '1班', subject: '数学', score: 97, avatar: 'https://picsum.photos/id/5/64/64' },
  { id: 3, name: '周八', grade: '高三', class: '2班', subject: '英语', score: 99, avatar: 'https://picsum.photos/id/6/64/64' },
]

// 最美集体数据
const bestCollectivesData = [
  { id: 1, name: '科技社团', grade: '高二', members: 35, achievement: '省科技创新大赛团体金奖', avatar: 'https://picsum.photos/id/9/64/64' },
  { id: 2, name: '环保志愿者队', grade: '高一', members: 42, achievement: '校园环境整治标兵集体', avatar: 'https://picsum.photos/id/10/64/64' },
  { id: 3, name: '合唱团', grade: '高三', members: 28, achievement: '市中学生合唱比赛一等奖', avatar: 'https://picsum.photos/id/11/64/64' },
]

// 最美班级数据
const bestClassesData = [
  { id: 1, name: '高一(1)班', grade: '高一', classTeacher: '王老师', score: 98, description: '班风优良，学习氛围浓厚', avatar: 'https://picsum.photos/id/12/64/64' },
  { id: 2, name: '高二(3)班', grade: '高二', classTeacher: '李老师', score: 96, description: '团结互助，全面发展', avatar: 'https://picsum.photos/id/13/64/64' },
  { id: 3, name: '高三(2)班', grade: '高三', classTeacher: '张老师', score: 97, description: '积极进取，成绩优异', avatar: 'https://picsum.photos/id/14/64/64' },
]

// 最美宿舍数据
const bestDormitoriesData = [
  { id: 1, name: '男生宿舍301', grade: '高一', members: 6, score: 99, description: '整洁有序，团结友爱', avatar: 'https://picsum.photos/id/15/64/64' },
  { id: 2, name: '女生宿舍202', grade: '高二', members: 6, score: 98, description: '温馨和谐，学习氛围好', avatar: 'https://picsum.photos/id/16/64/64' },
  { id: 3, name: '男生宿舍403', grade: '高三', members: 6, score: 97, description: '积极向上，互帮互助', avatar: 'https://picsum.photos/id/17/64/64' },
]

// 其他区域数据
const otherSectionData = [
  { id: 1, title: '校园文化节最佳组织奖', grade: '高二', recipient: '学生会', date: '2023-10-15' },
  { id: 2, title: '文明礼仪标兵', grade: '高一', recipient: '李明、张华等8人', date: '2023-10-10' },
  { id: 3, title: '科技创新优秀指导教师', grade: '高三', recipient: '陈老师、刘老师', date: '2023-10-05' },
]

// 根据年级筛选数据
export const filterByGrade = (data, grade) => {
  if (grade === 'all') {
    return data
  }
  return data.filter(item => item.grade === grade)
}

// 获取积分排行榜数据
export const getRankings = (grade = 'all') => {
  return filterByGrade(rankingsData, grade).slice(0, 5)
}

// 获取每周优秀之星数据
export const getWeeklyStars = (grade = 'all') => {
  return filterByGrade(weeklyStarsData, grade)
}

// 获取学习之星数据
export const getStudyStars = (grade = 'all') => {
  return filterByGrade(studyStarsData, grade)
}

// 获取最美集体数据
export const getBestCollectives = (grade = 'all') => {
  return filterByGrade(bestCollectivesData, grade)
}

// 获取最美班级数据
export const getBestClasses = (grade = 'all') => {
  return filterByGrade(bestClassesData, grade)
}

// 获取最美宿舍数据
export const getBestDormitories = (grade = 'all') => {
  return filterByGrade(bestDormitoriesData, grade)
}

// 获取其他区域数据
export const getOtherSection = (grade = 'all') => {
  return filterByGrade(otherSectionData, grade)
}

// 模拟API调用，返回Promise
export const fetchData = async (dataFunction, grade = 'all') => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 300))
  return dataFunction(grade)
}