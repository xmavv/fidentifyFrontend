export const utilsDescriptions = {
  orientation:
    'Anisotropy orientation estimate is used to derive the orientation of ridges in a fingerprint image, accounting for the local anisotropy (directionality) of the ridge patterns. The method is based on the mathematical framework presented in Equation 5 of the paper: "Orientation Estimation in Fingerprint Images.',
  gabor:
    "Gabor filter is a linear filter used for edge detection. Gabor filter can be viewed as a sinusoidal plane of particular frequency and orientation, modulated by a Gaussian envelope.",
  skeletonize:
    "Skeletonization reduces binary objects to 1 pixel wide representations. skeletonize works by making successive passes of the image. On each pass, border pixels are identified and removed on the condition that they do not break the connectivity of the corresponding object.",
  minutiae:
    "Minutiae extraction uses crossing number method in a really simple way to detect ridge endings and ridge bifurcations. Crossing number algorithm will look at 3x3 pixel blocks and consider if middle pixel is black (represents ridge), and if pixel on boundary are crossed with the ridge once, then it is a possible ridge ending, or if pixel on boundary are crossed with the ridge three times, then it is a ridge bifurcation.",
  singularity:
    "The Poincaré index is a mathematical concept used to analyze singularities in a two-dimensional vector field, such as the orientations in a fingerprint. The algorithm for calculating the Poincaré index in fingerprint patterns works by summing up the orientation differences between adjacent ridge orientations that are less than 90 degrees apart. The method is used to detect singularities, such as core points and delta points, which are crucial for fingerprint recognition.",
} as const;
