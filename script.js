const vocabList = [
  {
    image: "001_DNA.png",
    audio: "001_DNA.mp3",
    video: "001_DNA.mp4"
  },
  {
    image: "002_Nucleotide.png",
    audio: "002_Nucleotide.mp3",
    video: "002_Nucleotide.mp4"
  },
  {
    image: "003_Protein.png",
    audio: "003_Protein.mp3",
    video: "003_protein.mp4"
  },
  {
    image: "004_Ori.png",
    audio: "004_Ori.mp3",
    video: "004_Ori.mp4"
  },
  {
    image: "005_Enzyme.png",
    audio: "005_Enzyme.mp3",
    video: "005_Enzyme.mp4"
  },
  {
    image: "006_RNApolymerese.png", // Khớp đúng file 006_RNApolymerese.png ở cột trái
    audio: "006_RNApolymerase.mp3",
    video: "006_RNApolymerase.mp4"
  },
  {
    image: "007_RNA.png",
    audio: "007_RNA.mp3",
    video: "007_RNA.mp4"
  },
  {
    image: "008_Okazaki.png",
    audio: "008_Okazaki.mp3",
    video: "008_Okazaki.mp4"
  },
  {
    image: "009_Ligase.png",
    audio: "009_Ligase.mp3",
    video: "009_Ligase.mp4"
  }
];

let currentIndex = 0;

const currentNumberEl = document.getElementById("currentNumber");
const slideImageEl = document.getElementById("slideImage");
const audioSourceEl = document.getElementById("audioSource");
const audioPlayerEl = document.getElementById("audioPlayer");
const videoSourceEl = document.getElementById("videoSource");
const videoPlayerEl = document.getElementById("videoPlayer");
const prevBtn = document.getElementById("previousButton");
const nextBtn = document.getElementById("nextButton");

function updateContent(index) {
  const current = vocabList[index];

  currentNumberEl.textContent = index + 1;
  slideImageEl.src = current.image;

  audioSourceEl.src = current.audio;
  audioPlayerEl.load();

  videoSourceEl.src = current.video;
  videoPlayerEl.load();

  // Cập nhật trạng thái nút
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === vocabList.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateContent(currentIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < vocabList.length - 1) {
    currentIndex++;
    updateContent(currentIndex);
  }
});

// Điều khiển bằng bàn phím (mũi tên trái/phải)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") prevBtn.click();
});
