# Running
In new terminal:

    eval "$(rbenv init - zsh)"

Test env wiht local server:
  
    bundle exec jekyll serve --config "_config.yml,_config_dev.yml"

Running wihtout local server:

    bundle exec jekyll serve
  
# Apple Homebrew Commands
    arch -x86_64 brew list
    ibrew --version
    which ibrew
    644  which brew
    alias ibrew="arch -x86_64 /usr/local/Homebrew/bin/brew"

# Helpful resourcers

### Cheat sheet
https://learn-the-web.algonquindesign.ca/topics/jekyll-cheat-sheet/

### General Jekyll guidance
- https://jekyllrb.com/docs/step-by-step/05-includes/

### Preparations for Mac M1 machines

- Go to https://soffes.blog/homebrew-on-apple-silicon and https://stackoverflow.com/questions/68922404/i-cant-install-v83-15-on-mac-m1-through-homebrew
- Make sure they are installed correctly

### Guide to get a local copy instance running, while using a remote theme:

- https://dev.to/derlin/testing-github-pages-with-remote-theme-locally-3nid
- https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll


### Liquid 
- https://shopify.github.io/liquid/basics/operators/
- https://chenhuijing.com/blog/managing-data-with-jekyll/#%F0%9F%96%8C
- https://github.com/shopify/liquid/wiki/Liquid-for-Designers