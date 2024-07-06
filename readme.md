<h1 style="text-align:center;">SB_Writer 2024 | Sourav Bishai</h1>

### SB_Writer is a simple typewriter animation library using vanila javascript

### CDN:
```bash
https://cdn.jsdelivr.net/gh/techCodeSB/SB_Writer@main/sbwriter.min.js
```

### Typeof animation:
- `typewriter`
- `fadeEffect`
- `typewriter2`

> Using `setTime` function you can set time in your animation.

### Examples:
```html
  </body>
      <h1 id="hadding">hello world</h1>
  </body>

  <script src="https://cdn.jsdelivr.net/gh/techCodeSB/SB_Writer@main/sbwriter.min.js"></script>
  <script>
    const word = document.querySelector('#hadding');
    const type = new SBWriter(word);
    type.setTime(500).typewriter();
  </script>
```

```html
  </body>
    <div style="display: flex;gap: 10px;">
    <h1 id="title">hello world</h1>
    <span id="underscore" style="font-size: 30px; font-weight: bold;">_</span>
    </div>
  </body>

  <script src="https://cdn.jsdelivr.net/gh/techCodeSB/SB_Writer@main/sbwriter.min.js"></script>
  <script>
    const word = document.querySelector('#title');
    const underscore = document.querySelector('#underscore');

    const writer = new SBWriter(underscore);
    writer.setTime(1600).fadeEffect();

    const writer2 = new SBWriter(word);
    writer2.setTime(500).typewriter();
  </script>
```
