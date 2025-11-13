export const analyzeDescriptions = {
  flann:
    "FLANN (Fast Library for Approximate Nearest Neighbors) is an optimized way to find matches quickly, especially for large datasets. It uses k-d trees and other optimizations to make fingerprint matching much faster than brute-force approaches. FLANN is significantly faster than brute-force matching for large datasets since it approximates nearest neighbors instead of performing an exhaustive search. It is best suited for SIFT and SURF, which generate floating-point descriptors. However, it does not support binary descriptors like ORB, BRIEF. It uses k-d trees for fast approximate nearest neighbor searches.",
};
