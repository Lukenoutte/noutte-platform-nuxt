import { setActivePinia, createPinia } from 'pinia'
import { useGlobalStore } from './globalStore'

describe('Gobal Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Show mobile menu', () => {
    const globalStore = useGlobalStore()
    expect(globalStore.showMobileMenu).toBe(false)
    globalStore.setShowMobileMenu(true)
    expect(globalStore.showMobileMenu).toBe(true)
  })

  it('Add to favorited list', () => {
    const globalStore = useGlobalStore()
    expect(globalStore.favoritedList.length).toBe(0)
    globalStore.handleFavorited({ id:3511458 })
    globalStore.handleFavorited({ id:1511452 })
    expect(globalStore.favoritedList.length).toBe(2)
  })

  it('Add to favorited list alredy exist', () => {
    const globalStore = useGlobalStore()
    globalStore.handleFavorited({ id:3511458 })
    expect(globalStore.favoritedList.length).toBe(1)
    globalStore.handleFavorited({ id:3511458 })
    expect(globalStore.favoritedList.length).toBe(0)
  })

  it('Is Favorited function', () => {
    const globalStore = useGlobalStore()
    globalStore.handleFavorited({ id:3511458 })
    expect(globalStore.isFavorited(3511458)).toBe(true)
  })

  it('Trending List has items', () => {
    const globalStore = useGlobalStore()
    expect(globalStore.trendingList.length).toBeGreaterThan(0)
  })

  it('Most Watched List has items', () => {
    const globalStore = useGlobalStore()
    expect(globalStore.mostWatchedList.length).toBeGreaterThan(0)
  })
})