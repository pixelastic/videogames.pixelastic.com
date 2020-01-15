import { v2 as cloudinary } from 'cloudinary';
import { _ } from 'golgoth';
import site from './site.json';
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export default {
  originPrefix: 'https://assets.pixelastic.com/videogames/',
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
  markdownHigh(path) {
    return this.proxy(path, {
      format: 'auto',
      quality: 80,
    });
  },
  markdownLow(path) {
    return this.proxy(path, {
      format: 'auto',
      quality: 20,
      blur: 500,
    });
  },
  screenshot(pageUrl, userOptions) {
    const options = {
      viewport: '1600x900',
      fullpage: false,
      ...userOptions,
    };
    const suffix = _.chain(options)
      .map((value, key) => {
        return `${key}=${value}`;
      })
      .join('|')
      .value();
    const fullUrl = `${site.defaultUrl}${pageUrl}/url2png/${suffix}`;

    return cloudinary.url(fullUrl, {
      sign_url: true,
      type: 'url2png',
    });
  },
};
