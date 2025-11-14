import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.scss';

// Import local gallery images
const galleryImages = [
  { id: 1, src: '/gallery/1.JPG', alt: 'Gallery image 1' },
  { id: 2, src: '/gallery/2.JPG', alt: 'Gallery image 2' },
  { id: 3, src: '/gallery/3.JPG', alt: 'Gallery image 3' },
  { id: 4, src: '/gallery/4.JPG', alt: 'Gallery image 4' },
  { id: 5, src: '/gallery/5.JPG', alt: 'Gallery image 5' },
  { id: 6, src: '/gallery/6.JPG', alt: 'Gallery image 6' },
  { id: 7, src: '/gallery/7.JPG', alt: 'Gallery image 7' },
  { id: 8, src: '/gallery/8.JPG', alt: 'Gallery image 8' },
  { id: 9, src: '/gallery/9.JPG', alt: 'Gallery image 9' },
  { id: 10, src: '/gallery/10.JPG', alt: 'Gallery image 10' },
  { id: 11, src: '/gallery/11.JPG', alt: 'Gallery image 11' },
  { id: 12, src: '/gallery/12.JPG', alt: 'Gallery image 12' },
  { id: 13, src: '/gallery/13.JPG', alt: 'Gallery image 13' },
  { id: 14, src: '/gallery/14.JPG', alt: 'Gallery image 14' },
  { id: 15, src: '/gallery/15.JPG', alt: 'Gallery image 15' },
  { id: 16, src: '/gallery/16.JPG', alt: 'Gallery image 16' },
  { id: 17, src: '/gallery/17.jpg', alt: 'Gallery image 17' },
  { id: 18, src: '/gallery/18.jpg', alt: 'Gallery image 18' },
  { id: 19, src: '/gallery/19.jpg', alt: 'Gallery image 19' },
  { id: 20, src: '/gallery/20.jpg', alt: 'Gallery image 20' },
  { id: 21, src: '/gallery/flat-roof.jpg', alt: 'Gallery image 21' },
  { id: 22, src: '/gallery/chimney.jpg', alt: 'Gallery image 20' },  
];

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);
  
  const carouselRef = useRef(null);
  const autoPlayInterval = useRef(null);

  const slidesPerView = 3;
  const totalSlides = Math.ceil(galleryImages.length / slidesPerView);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && totalSlides > 1) {
      autoPlayInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [isAutoPlaying, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') {
          setSelectedImage(null);
          setIsFullscreen(false);
        }
        if (e.key === 'ArrowLeft') {
          const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
          const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
          setSelectedImage(galleryImages[prevIndex]);
        }
        if (e.key === 'ArrowRight') {
          const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
          const nextIndex = (currentIndex + 1) % galleryImages.length;
          setSelectedImage(galleryImages[nextIndex]);
        }
        if (e.key === 'f' || e.key === 'F') {
          toggleFullscreen();
        }
      } else {
        if (e.key === 'ArrowLeft') {
          prevSlide();
        }
        if (e.key === 'ArrowRight') {
          nextSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, isFullscreen]);

  // Enhanced touch/swipe functionality for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Enhanced modal touch/swipe functionality
  const handleModalTouchStart = (e) => {
    if (isMobile) {
      setTouchStart(e.targetTouches[0].clientX);
    }
  };

  const handleModalTouchMove = (e) => {
    if (isMobile) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleModalTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      navigateModal('next');
    }
    if (isRightSwipe) {
      navigateModal('prev');
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Image loading
  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSlideImages = () => {
    const startIndex = currentSlide * slidesPerView;
    return galleryImages.slice(startIndex, startIndex + slidesPerView);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsAutoPlaying(false); // Pause auto-play when modal opens
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsFullscreen(false);
    setIsAutoPlaying(true); // Resume auto-play when modal closes
  };

  const navigateModal = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__container">
        <h2 className="gallery__title">Our Work Gallery</h2>
        <p className="gallery__subtitle">Explore our completed projects and see the quality of our work</p>
        
        {/* Carousel Container */}
        <div 
          className="gallery__carousel-container"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons - Hidden on mobile */}
          {totalSlides > 1 && !isMobile && (
            <>
              <button 
                className="gallery__nav-btn gallery__nav-btn--prev"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button 
                className="gallery__nav-btn gallery__nav-btn--next"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}

          {/* Carousel */}
          <div className="gallery__carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="gallery__slide"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {getCurrentSlideImages().map((image) => (
                  <motion.div
                    key={image.id}
                    className="gallery__item"
                    whileHover={{ 
                      scale: isMobile ? 1 : 1.05,
                      y: isMobile ? 0 : -8,
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => openModal(image)}
                  >
                    <div className="gallery__image-container">
                      {!loadedImages.has(image.id) && (
                        <div className="gallery__image-placeholder">
                          <div className="gallery__image-skeleton"></div>
                        </div>
                      )}
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className={`gallery__image ${loadedImages.has(image.id) ? 'gallery__image--loaded' : ''}`}
                        loading="lazy"
                        onLoad={() => handleImageLoad(image.id)}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="gallery__indicators">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  className={`gallery__indicator ${currentSlide === index ? 'gallery__indicator--active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Slide Counter */}
          <div className="gallery__counter">
            {currentSlide + 1} / {totalSlides}
          </div>
        </div>

        {/* Enhanced Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className={`gallery__modal ${isFullscreen ? 'gallery__modal--fullscreen' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              onTouchStart={handleModalTouchStart}
              onTouchMove={handleModalTouchMove}
              onTouchEnd={handleModalTouchEnd}
            >
              <motion.div
                className="gallery__modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Navigation - Hidden on mobile */}
                {!isMobile && (
                  <>
                    <button 
                      className="gallery__modal-nav gallery__modal-nav--prev"
                      onClick={() => navigateModal('prev')}
                      aria-label="Previous image"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    <button 
                      className="gallery__modal-nav gallery__modal-nav--next"
                      onClick={() => navigateModal('next')}
                      aria-label="Next image"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </>
                )}

                {/* Modal Controls */}
                <div className="gallery__modal-controls">
                  <button 
                    className="gallery__modal-close"
                    onClick={closeModal}
                    aria-label="Close modal"
                  >
                    ×
                  </button>
                  {/* Fullscreen button - Hidden on mobile */}
                  {!isMobile && (
                    <button 
                      className="gallery__modal-fullscreen"
                      onClick={toggleFullscreen}
                      aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                    >
                      {isFullscreen ? '⤓' : '⤢'}
                    </button>
                  )}
                </div>

                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="gallery__modal-image"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 