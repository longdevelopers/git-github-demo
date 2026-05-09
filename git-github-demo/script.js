const gitCommands = [
  {
    command: "git init",
    description: "Khởi tạo một repository Git mới trong thư mục hiện tại."
  },
  {
    command: "git clone <url>",
    description: "Sao chép repository từ GitHub về máy tính."
  },
  {
    command: "git status",
    description: "Kiểm tra trạng thái các file trong project."
  },
  {
    command: "git add .",
    description: "Thêm toàn bộ file đã thay đổi vào vùng staging."
  },
  {
    command: "git commit -m \"noi dung commit\"",
    description: "Lưu lại phiên bản thay đổi của mã nguồn."
  },
  {
    command: "git push",
    description: "Đẩy code từ máy tính lên GitHub."
  },
  {
    command: "git pull",
    description: "Lấy code mới nhất từ GitHub về máy tính."
  },
  {
    command: "git branch",
    description: "Xem danh sách các nhánh trong repository."
  },
  {
    command: "git checkout -b ten-nhanh",
    description: "Tạo và chuyển sang một nhánh mới."
  },
  {
    command: "git merge ten-nhanh",
    description: "Gộp thay đổi từ nhánh khác vào nhánh hiện tại."
  }
];

function renderCommands() {
  const commandList = document.getElementById("commandList");

  gitCommands.forEach((item) => {
    const div = document.createElement("div");
    div.className = "command-item";
    div.innerHTML = `<code>${item.command}</code><p>${item.description}</p>`;
    commandList.appendChild(div);
  });
}

function showRandomCommand() {
  const randomIndex = Math.floor(Math.random() * gitCommands.length);
  const item = gitCommands[randomIndex];
  document.getElementById("randomCommand").innerText = `${item.command}: ${item.description}`;
}

renderCommands();
