body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  color: white;
  background: black;
  overflow-x: hidden;
}

/* Arka plan video */
#bg-video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  object-fit: cover;
}

/* Glassmorphism kartlar */
.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  margin: 20px auto;
  width: 80%;
  text-align: center;
}

h1 {
  font-size: 3em;
  text-shadow: 0 0 20px cyan;
}

.btn {
  display: inline-block;
  padding: 15px 30px;
  background: #5865F2;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.btn:hover {
  background: #404EED;
  box-shadow: 0 0 15px #5865F2;
}

footer {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(5px);
  text-align: center;
  padding: 20px;
  margin-top: 40px;
}

/* Mouse ışık efekti */
body::before {
  content: "";
  position: fixed;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 80%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  top: var(--y, 50%);
  left: var(--x, 50%);
  transition: 0.05s;
  z-index: 0;
}
