declare module '@splidejs/react-splide' {
  import { ComponentType, HTMLAttributes, ReactNode } from 'react'
  
  export interface Options {
    type?: 'slide' | 'loop' | 'fade'
    rewind?: boolean
    speed?: number
    rewindSpeed?: number
    rewindByDrag?: boolean
    width?: number | string
    height?: number | string
    fixedWidth?: number | string
    fixedHeight?: number | string
    heightRatio?: number
    autoWidth?: boolean
    autoHeight?: boolean
    perPage?: number
    perMove?: number
    clones?: number
    start?: number
    focus?: number | 'center'
    gap?: number | string
    padding?: number | string | { left?: number | string; right?: number | string }
    arrows?: boolean
    pagination?: boolean
    paginationKeyboard?: boolean
    paginationDirection?: 'ltr' | 'rtl' | 'ttb'
    easing?: string
    easingFunc?: (t: number) => number
    drag?: boolean | 'free'
    snap?: boolean
    noDrag?: string
    dragMinThreshold?: number | { mouse?: number; touch?: number }
    flickPower?: number
    flickMaxPages?: number
    waitForTransition?: boolean
    arrowPath?: string
    autoplay?: boolean | 'pause'
    interval?: number
    pauseOnHover?: boolean
    pauseOnFocus?: boolean
    resetProgress?: boolean
    lazyLoad?: boolean | 'nearby' | 'sequential'
    preloadPages?: number
    keyboard?: boolean | 'focused' | 'global'
    wheel?: boolean
    wheelMinThreshold?: number
    wheelSleep?: number
    releaseWheel?: boolean
    direction?: 'ltr' | 'rtl' | 'ttb'
    cover?: boolean
    slideFocus?: boolean
    focusableNodes?: string
    isNavigation?: boolean
    trimSpace?: boolean | 'move'
    updateOnMove?: boolean
    throttle?: number
    destroy?: boolean | string
    breakpoints?: Record<string, Partial<Options>>
    classes?: Partial<{
      root: string
      slider: string
      track: string
      list: string
      slide: string
      container: string
      arrows: string
      arrow: string
      prev: string
      next: string
      pagination: string
      page: string
      clone: string
    }>
    i18n?: Partial<{
      prev: string
      next: string
      first: string
      last: string
      slideX: string
      pageX: string
      play: string
      pause: string
      carousel: string
      slide: string
      select: string
      slideLabel: string
    }>
    reducedMotion?: Partial<{
      speed: number
      rewindSpeed: number
      autoplay: boolean | 'pause'
    }>
    [key: string]: any
  }

  export interface SplideProps extends HTMLAttributes<HTMLDivElement> {
    options?: Options
    extensions?: Record<string, any>
    transition?: ComponentType<any>
    hasTrack?: boolean
    tag?: string
    children?: ReactNode
    onArrowsMounted?: (prev: HTMLButtonElement, next: HTMLButtonElement) => void
    onArrowsUpdated?: (prev: HTMLButtonElement, next: HTMLButtonElement) => void
    onAutoplayPause?: () => void
    onAutoplayPlay?: () => void
    onAutoplayPlaying?: (rate: number) => void
    onClick?: (event: MouseEvent) => void
    onDrag?: () => void
    onDragged?: () => void
    onDragging?: () => void
    onLazyLoadLoaded?: (img: HTMLImageElement, slide: HTMLElement) => void
    onLazyLoadLoading?: (img: HTMLImageElement, slide: HTMLElement) => void
    onMounted?: () => void
    onMove?: (index: number, prev: number, dest: number) => void
    onMoved?: (index: number, prev: number, dest: number) => void
    onNavigationMounted?: (splide: any) => void
    onPaginationMounted?: (data: any) => void
    onPaginationUpdated?: (data: any) => void
    onRefresh?: () => void
    onResize?: () => void
    onResized?: () => void
    onScroll?: () => void
    onScrolled?: () => void
    onUpdated?: (options: Options) => void
    onVisible?: (slide: HTMLElement) => void
    onHidden?: (slide: HTMLElement) => void
    onActive?: (slide: HTMLElement) => void
    onInactive?: (slide: HTMLElement) => void
  }

  export interface SplideSlideProps extends HTMLAttributes<HTMLLIElement> {
    children?: ReactNode
  }

  export const Splide: ComponentType<SplideProps>
  export const SplideSlide: ComponentType<SplideSlideProps>
  export const SplideTrack: ComponentType<any>
}

declare module '@splidejs/splide-extension-auto-scroll' {
  export const AutoScroll: any
}
