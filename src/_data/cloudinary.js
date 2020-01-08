export default {
  originPrefix: 'http://assets.pixelastic.com/videogames/',
  cloudinaryPrefix:
    'http://res.cloudinary.com/pixelastic-videogames/image/fetch/',
  proxy(path, userOptions) {
    let options = [];
    if (userOptions.width) {
      options.push(`w_${userOptions.width}`);
    }
    if (userOptions.height) {
      options.push(`h_${userOptions.height}`);
    }
    if (userOptions.quality) {
      options.push(`q_${userOptions.quality}`);
    }
    if (userOptions.format) {
      options.push(`f_${userOptions.format}`);
    }
    if (userOptions.blur) {
      options.push(`e_blur:${userOptions.blur}`);
    }

    const optionsString = options.join(',');
    return `${this.cloudinaryPrefix}${optionsString}/${this.originPrefix}${path}`;
  },
  fullImage(path) {
    return this.proxy(path, {
      format: 'auto',
      quality: 80,
    });
  },
  thumbnailHigh(path) {
    return this.proxy(path, {
      width: 350,
      format: 'auto',
      quality: 80,
    });
  },
  thumbnailLow(path) {
    return this.proxy(path, {
      width: 350,
      format: 'auto',
      quality: 20,
      blur: 500,
    });
  },
};
