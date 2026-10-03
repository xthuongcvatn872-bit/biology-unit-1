// Dữ liệu 9 từ vựng khớp chính xác 100% với tên tệp thực tế
const vocabList = [
  { id: 1, image: "001_DNA.PNG", audio: "001_DNA.mp3", video: "001_DNA.mp4" },
  { id: 2, image: "002_Nucleotide.PNG", audio: "002_Nucleotide.mp3", video: "002_Nucleotide.mp4" },
  { id: 3, image: "003_Protein.PNG", audio: "003_Protein.mp3", video: "003_protein.mp4" },
  { id: 4, image: "004_Ori.PNG", audio: "004_Ori.mp3", video: "004_Ori.mp4" },
  { id: 5, image: "005_Enzyme.PNG", audio: "005_Enzyme.mp3", video: "005_Enzyme.mp4" },
  { id: 6, image: "006_RNApolymerase.PNG", audio: "006_RNApolymerase.mp3", video: "006_RNApolymerase.mp4" },
  { id: 7, image: "007_RNA.PNG", audio: "007_RNA.mp3", video: "007_RNA.mp4" },
  { id: 8, image: "008_Okazaki.PNG", audio: "008_Okazaki.mp3", video: "008_Okazaki.mp4" },
  { id: 9, image: "009_Ligase.PNG", audio: "009_Ligase.mp3", video: "009_Ligase.mp4" }
];

let currentIndex = 0;

// Truy xuất các phần tử DOM
const currentNumberEl = document.getElementById("currentNumber");
const slideImageEl = document.getElementById("slideImage");
const audioSourceEl = document.getElementById("audioSource");
const audioPlayerEl = document.getElementById("audioPlayer");
const videoSourceEl = document.getElementById("videoSource");
const videoPlayerEl = document.getElementById("videoPlayer");
const prevBtn = document.getElementById("previousButton");
const nextBtn = document.getElementById("nextButton");

// Hàm cập nhật nội dung
function updateContent(index) {
  const current = vocabList[index];

  // 1. Cập nhật số thứ tự
  currentNumberEl.textContent = current.id;

  // 2. Cập nhật ảnh slide
  slideImageEl.src = current.image;

  // 3. Cập nhật âm thanh & nạp lại
  audioSourceEl.src = current.audio;
  audioPlayerEl.load();

  // 4. Cập nhật video & nạp lại
  videoSourceEl.src = current.video;
  videoPlayerEl.load();

  // 5. Cập nhật trạng thái nút
  prevBtn.disabled = (index === 0);
  nextBtn.disabled = (index === vocabList.length - 1);
}

// Bắt sự kiện click chuột
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

// Hỗ trợ phím mũi tên bàn phím: Sang trái (Lùi), Sang phải (Tiến)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" && !nextBtn.disabled) {
    nextBtn.click();
  } else if (e.key === "ArrowLeft" && !prevBtn.disabled) {
    prevBtn.click();
  }
});

// Khởi chạy ngay khi vào trang web
updateContent(0);
