/**
 *                SB_Writer 2024 | Sourav Bishai
 * --------------------------------------------------------------
 * A simple TypeWriter animation library using vanilla javascript
 * --------------------------------------------------------------
 * --------------------------------------------------------------
 * 
 * 
 * Type of effects:
 * ----------------
 ** typewriter
 ** fadeEffect
 ** typewriter2
 * 
 */


class SBWriter {
  constructor(element) {
    this.word = element;
    this.txt = element.innerText;
    this.len = this.txt.length;

    this.time;
  }

  setTime(time) {
    this.time = time;
    return this;
  }


  //  Typewriter Effect
  // ===================
  typewriter() {
    const start = (word) => {
      let lenOfWord = word.length;
      let currentIndex = 0;

      let writer1Start = setInterval(() => {
        this.word.innerHTML += word[currentIndex];
        currentIndex++;

        if (currentIndex == lenOfWord) {
          clearInterval(writer1Start)
          end()
        }

      }, this.time);
    }

    const end = () => {
      let len = this.len;
      let word = this.word.innerText;

      let writer1End = setInterval(() => {
        const t = this.txt.slice(0, len - 1);
        this.word.innerText = t;
        len--;

        if (len < 1) {
          clearInterval(writer1End)
          start(word);
        }

      }, this.time);
    }

    end();

  }



  //  Fade in and out Effect
  // ========================
  fadeEffect() {
    setInterval(() => {
      this.word.style.transition = '0.8s'
      this.word.style.opacity = '0';

      setTimeout(() => {
        this.word.style.opacity = '1';
      }, this.time / 2
    )
    }, this.time)

  }



  // Typewriter Effect
  // ==================
  typewriter2() {
    this.word.setAttribute(
      'style', `
      display:inline-block; overflow:hidden; text-wrap:nowrap
      `
    )

    // Get default html element width;
    const getDefaultWidth = this.word.getBoundingClientRect().width;
    let tmp = getDefaultWidth;

    const start = () => {
      let currentWidth = 0;
      let writer2Start = setInterval(() => {
        this.word.style.width = `${currentWidth}px`;
        currentWidth++;

        // ** `Ei 10 ta bebohar hoyeche karon seser letter ta aktu besi khon dekhanor jonno`
        if (currentWidth > parseInt(getDefaultWidth) + 10) {
          clearInterval(writer2Start);
          end();
        }
      }, this.time)
    }

    const end = () => {
      let writer2End = setInterval(() => {
        this.word.style.width = `${parseInt(tmp)}px`;
        tmp--;

        if (tmp < 0) {
          clearInterval(writer2End)
          tmp = getDefaultWidth;
          start();
        }
      }, this.time)
    }

    end()

  }


}

