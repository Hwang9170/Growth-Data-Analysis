function rescanQRCode() {
  // QR 코드 이미지를 다시 로드
  const qrImage = document.querySelector("#qr-code img");
  qrImage.src = qrImage.src.split("?")[0] + "?" + new Date().getTime();
  alert("QR 코드를 다시 로드했습니다.");
}
