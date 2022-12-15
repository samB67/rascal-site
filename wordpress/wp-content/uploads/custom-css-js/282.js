<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});</script>
<!-- end Simple Custom CSS and JS -->
