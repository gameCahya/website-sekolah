export interface CarouselState {
  currentIndex: number;
  actualIndex: number;
  isAnimating: boolean;
  itemCount: number;
}

export function initializeCarousel(wrapper: HTMLElement): void {
  const container = wrapper.querySelector('.carousel-container') as HTMLElement;
  const track = container?.querySelector('.carousel-track') as HTMLElement;
  const prevBtn = wrapper.querySelector('.carousel-prev') as HTMLElement;
  const nextBtn = wrapper.querySelector('.carousel-next') as HTMLElement;
  const dots = wrapper.querySelectorAll('.carousel-dot');

  if (!container || !track) return;

  const originalItems = Array.from(track.querySelectorAll('.carousel-item')) as HTMLElement[];
  const itemCount = originalItems.length;

  if (itemCount === 0) return;

  // Clone items for infinite loop
  const firstClone = originalItems[0].cloneNode(true) as HTMLElement;
  const lastClone = originalItems[itemCount - 1].cloneNode(true) as HTMLElement;

  firstClone.classList.add('clone');
  lastClone.classList.add('clone');

  track.appendChild(firstClone);
  track.insertBefore(lastClone, track.firstChild);

  const state: CarouselState = {
    currentIndex: 0,
    actualIndex: 1,
    isAnimating: false,
    itemCount
  };

  // Get centered scroll position for an item
  function getCenteredScrollPosition(domIndex: number): number {
    const allItems = Array.from(track.querySelectorAll('.carousel-item')) as HTMLElement[];
    const targetItem = allItems[domIndex];

    if (!targetItem) return 0;

    const containerWidth = container.offsetWidth;
    const itemWidth = targetItem.offsetWidth;
    const itemLeft = targetItem.offsetLeft;

    return itemLeft - (containerWidth / 2) + (itemWidth / 2);
  }

  // Update dots indicator
  function updateDots(): void {
    dots.forEach((dot, index) => {
      if (index === state.currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // Scroll to specific position
  function scrollToPosition(domIndex: number, smooth = true): void {
    const scrollPos = getCenteredScrollPosition(domIndex);

    container.scrollTo({
      left: scrollPos,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }

  // Handle transition end (jump to real item if at clone)
  function handleTransitionEnd(): void {
    if (state.actualIndex === 0) {
      // At lastClone, jump to real last
      state.actualIndex = state.itemCount;
      state.currentIndex = state.itemCount - 1;
      scrollToPosition(state.actualIndex, false);
    } else if (state.actualIndex === state.itemCount + 1) {
      // At firstClone, jump to real first
      state.actualIndex = 1;
      state.currentIndex = 0;
      scrollToPosition(state.actualIndex, false);
    }

    state.isAnimating = false;
    updateDots();
  }

  // Navigate to previous item
  function navigatePrev(): void {
    if (state.isAnimating) return;

    state.isAnimating = true;
    state.actualIndex--;
    state.currentIndex = state.currentIndex > 0 ? state.currentIndex - 1 : state.itemCount - 1;

    scrollToPosition(state.actualIndex, true);
    setTimeout(handleTransitionEnd, 500);
  }

  // Navigate to next item
  function navigateNext(): void {
    if (state.isAnimating) return;

    state.isAnimating = true;
    state.actualIndex++;
    state.currentIndex = state.currentIndex < state.itemCount - 1 ? state.currentIndex + 1 : 0;

    scrollToPosition(state.actualIndex, true);
    setTimeout(handleTransitionEnd, 500);
  }

  // Navigate to specific index
  function navigateToIndex(index: number): void {
    if (state.isAnimating) return;

    state.isAnimating = true;
    state.currentIndex = index;
    state.actualIndex = index + 1;

    scrollToPosition(state.actualIndex, true);

    setTimeout(() => {
      state.isAnimating = false;
      updateDots();
    }, 500);
  }

  // Initialize carousel position
  function initialize(): void {
    state.currentIndex = 0;
    state.actualIndex = 1;

    const attemptScroll = (attempt = 0): void => {
      if (attempt > 5) return;

      scrollToPosition(state.actualIndex, false);
      updateDots();

      setTimeout(() => attemptScroll(attempt + 1), attempt === 0 ? 50 : 100);
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        attemptScroll();
      });
    });
  }

  // Event Listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigatePrev();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateNext();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      navigateToIndex(index);
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!container.matches(':hover')) return;

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      navigatePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      navigateNext();
    }
  });

  // Handle resize
  let resizeTimeout: number;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(() => {
      scrollToPosition(state.actualIndex, false);
    }, 250);
  });

  // Initialize on load
  if (document.readyState === 'complete') {
    initialize();
  } else {
    window.addEventListener('load', initialize);
  }
}