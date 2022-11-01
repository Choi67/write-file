const fs= require ('fs')

async function writeHtml (list) {
    let header = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
        '<html xmlns="http://www.w3.org/1999/xhtml">\n' +
        '\n' +
        '<head>\n' +
        '\t<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n' +
        '\t<title>해피포인트</title>\n' +
        '</head>\n' +
        '\n' +
        '<body style="margin: 0; padding: 0;">\n' +
        '\n' +
        '\t<div style="width:780px;margin:0 auto;background-color:#fff;">\n' +
        '\t\t<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:0 auto;line-height:1.5;background-color:#fff;color:#222;font-size:16px;font-family:\'맑은 고딕\',Malgun Gothic,\'나눔고딕\',NanumGothic,\'돋움\',Dotum,\'Helvetica\',\'Apple SD Gothic Neo\',sans-serif;letter-spacing: -0.32px;word-break: break-all; background: url(\'https://happy-app.s3.ap-northeast-2.amazonaws.com/upfiles/mail/common/2020/logo-bg-01.png\') 0 0 no-repeat; background-size: 780px 240px;">\n' +
        '\t\t\t<tr>\n' +
        '\t\t\t\t<td height="140px;"></td>\n' +
        '\t\t\t</tr>\n' +
        '\t\t\t<!-- 메일본문 -->\n' +
        '\t\t\t<tr>\n' +
        '\t\t\t\t<td>\n' +
        '\t\t\t\t\t<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:0 auto;line-height:1.5;background-color:transparent;color:#222;font-size:16px;font-family:\'맑은 고딕\',Malgun Gothic,\'나눔고딕\',NanumGothic,\'돋움\',Dotum,\'Helvetica\',\'Apple SD Gothic Neo\',sans-serif;letter-spacing: -1.12px;">\n' +
        '\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t<td width="40"></td>\n' +
        '\t\t\t\t\t\t\t<td style="box-shadow: 1px 8px 7px 0 rgba(0, 0, 0, 0.02);">\n' +
        '\t\t\t\t\t\t\t\t<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:0 auto;line-height:1.5;background-color:#ffffff;color:#222;font-size:16px;font-family:\'맑은 고딕\',Malgun Gothic,\'나눔고딕\',NanumGothic,\'돋움\',Dotum,\'Helvetica\',\'Apple SD Gothic Neo\',sans-serif;letter-spacing: -1.12px;">\n' +
        '\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t<td width="40"></td>\n' +
        '\t\t\t\t\t\t\t\t\t\t<td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:0 auto;line-height:1.5;background-color:#ffffff;color:#222;font-size:16px;font-family:\'맑은 고딕\',Malgun Gothic,\'나눔고딕\',NanumGothic,\'돋움\',Dotum,\'Helvetica\',\'Apple SD Gothic Neo\',sans-serif;letter-spacing: -1.12px;">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<td height="60"></td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<!-- 메일 제목 -->\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="font-size:28px; font-weight: bold;">정보주체 이외로부터 수집한<br>개인정보의 수집 출처 등 고지</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<td height="32"></td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<!-- 안내 문구 -->\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="font-weight: bold;">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t안녕하세요.\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t항상 해피포인트카드를 이용해 주셔서 진심으로 감사드립니다.\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<td height="24"></td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트에서는 서비스 제휴 및 제휴카드 발급 시 제휴사의 개인정보 제 3자 제공 동의를 통해\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t개인정보를 제공 받아 개인정보를 수집하여 처리하였으므로 『개인정보보호법』 제 20조 2항 및\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t동법 시행령 제 15조의2에 따라 아래와 같이 수집 출처 등을 안내해 드립니다.\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<td height="28"></td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<!-- 개인정보 수집 출처 고지 내용 -->\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:0 auto; padding: 32px; line-height:1.5;background-color:#ffffff;color:#222222;font-weight:300;font-size:14px;font-family:\'맑은 고딕\',Malgun Gothic,\'나눔고딕\',NanumGothic,\'돋움\',Dotum,\'Helvetica\',\'Apple SD Gothic Neo\',sans-serif;letter-spacing: -0.32px; border: 1px solid #e5e5e5; border-radius: 12px;">\n' +
        '\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="font-weight: bold;font-size:16px;">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t· 개인정보의 수집 출처 및 처리목적 (2022년 8월 기준)\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td height="10"></td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding-left: 10px;">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t고객님은 아래와 같이 해피포인트 서비스 이용을 위한 개인정보 제공에 동의 하셨습니다.<br>앞으로도 해피포인트 서비스 이용을 원하시는 경우, 현 상태를 유지해 주시면 됩니다. 감사합니다.\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td height="24"></td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:0 auto;line-height:1.5;background-color:#ffffff;font-weight:normal;color:#666666;font-size:14px;font-family:\'맑은 고딕\',Malgun Gothic,\'나눔고딕\',NanumGothic,\'돋움\',Dotum,\'Helvetica\',\'Apple SD Gothic Neo\',sans-serif;letter-spacing: -0.28px; border-top:2px solid #909090;">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<colgroup>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<col width="145px">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<col width="160px">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<col>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</colgroup>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; font-weight: bold; text-align: center; background-color: #f7f7f7; border-right: 1px solid #e5e5e5;">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t브랜드명\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; font-weight: bold; text-align: center; background-color: #f7f7f7; border-right: 1px solid #e5e5e5;">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t제휴사명\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px; font-weight: bold; text-align: center; background-color: #f7f7f7;">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t처리목적\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>'
    let footer = '</table>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:0 auto; line-height:1.5;background-color:#ffffff;color:#222222;font-weight:300;font-size:16px;font-family:\'맑은 고딕\',Malgun Gothic,\'나눔고딕\',NanumGothic,\'돋움\',Dotum,\'Helvetica\',\'Apple SD Gothic Neo\',sans-serif;letter-spacing: -0.32px;">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td height="24"></td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="font-weight: bold;font-size:16px;">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t· 개인정보 처리의 정지 요청\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td height="10"></td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding-left: 10px;">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t고객님께서는 개인정보 처리의 정지를 요구할 권리가 있으나, 개인정보 처리의 정지를 요청하신 경우, 해피포인트 제휴 서비스의 해피포인트 적립/사용 기능이 중지될 수 있으며, 제휴사를 통한 당사 서비스 이용 시 이용의 제한이 있을 수 있습니다.<br>개인정보 처리의 정지는해피포인트 고객센터를 통해 요청하실 수 있습니다.\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td height="24"></td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="font-weight: bold;font-size:16px;">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t· 고객 상담 전화 : 080-320-1234, 평일(월~금) 오전 9시 ~ 오후 7시\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td height="24"></td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<td height="32"></td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<td height="40"></td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</table>\n' +
        '\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t\t<td width="40"></td>\n' +
        '\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t</table>\n' +
        '\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t<td width="40"></td>\n' +
        '\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t</table>\n' +
        '\t\t\t\t</td>\n' +
        '\t\t\t</tr>\n' +
        '\t\t\t<!-- //메일본문 -->\n' +
        '\t\t\t<tr>\n' +
        '\t\t\t\t<td height="40"></td>\n' +
        '\t\t\t</tr>\n' +
        '\t\t\t<!-- 메일 안내 -->\n' +
        '\t\t\t<tr>\n' +
        '\t\t\t\t<td>\n' +
        '\t\t\t\t\t<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:0 auto;line-height:1.5;background-color:#f7f7f7;color:#333333;font-size:12px;font-family:\'맑은 고딕\',Malgun Gothic,\'나눔고딕\',NanumGothic,\'돋움\',Dotum,\'Helvetica\',\'Apple SD Gothic Neo\',sans-serif;letter-spacing: -0.24px;">\n' +
        '\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t<td width="40" height="28"></td>\n' +
        '\t\t\t\t\t\t\t<td></td>\n' +
        '\t\t\t\t\t\t\t<td width="40" height="28"></td>\n' +
        '\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t<td width="40"></td>\n' +
        '\t\t\t\t\t\t\t<td>\n' +
        '\t\t\t\t\t\t\t\t<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:0 auto;line-height:1.5;background-color:#f7f7f7;color:#333333;font-size:12px;font-family:\'맑은 고딕\',Malgun Gothic,\'나눔고딕\',NanumGothic,\'돋움\',Dotum,\'Helvetica\',\'Apple SD Gothic Neo\',sans-serif;letter-spacing: -0.24px;">\n' +
        '\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t<td>· 본 메일은 회원님의 광고성 정보 수신동의 여부와 관계없이 법적인 사항으로 발송됩니다.</td>\n' +
        '\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t<td height="2"></td>\n' +
        '\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t<td>· 본 메일은 발신전용으로 회신하실 수 없습니다.</td>\n' +
        '\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t<td height="2"></td>\n' +
        '\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t<td>· 자세한 문의 사항은 고객센터를 이용해 주시기 바랍니다. (080-320-1234)</td>\n' +
        '\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t</table>\n' +
        '\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t<td width="40"></td>\n' +
        '\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t<td width="40" height="20"></td>\n' +
        '\t\t\t\t\t\t\t<td></td>\n' +
        '\t\t\t\t\t\t\t<td width="40" height="20"></td>\n' +
        '\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t</table>\n' +
        '\t\t\t\t</td>\n' +
        '\t\t\t</tr>\n' +
        '\t\t\t<tr>\n' +
        '\t\t\t\t<td height="1" style="background-color: #e5e5e5;"></td>\n' +
        '\t\t\t</tr>\n' +
        '\t\t\t<!-- // 메일 안내 -->\n' +
        '\n' +
        '\t\t\t<!-- 메일푸터 -->\n' +
        '\t\t\t<tr>\n' +
        '\t\t\t\t<td>\n' +
        '\t\t\t\t\t<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:0 auto;line-height:1.5;background-color:#f7f7f7;color:#999999;font-size:12px;font-family:\'맑은 고딕\',Malgun Gothic,\'나눔고딕\',NanumGothic,\'돋움\',Dotum,\'Helvetica\',\'Apple SD Gothic Neo\',sans-serif;letter-spacing: -0.24px;">\n' +
        '\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t<td width="40" height="20"></td>\n' +
        '\t\t\t\t\t\t\t<td></td>\n' +
        '\t\t\t\t\t\t\t<td width="40" height="20"></td>\n' +
        '\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t<td width="40"></td>\n' +
        '\t\t\t\t\t\t\t<td>\n' +
        '\t\t\t\t\t\t\t\t<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:0 auto;line-height:1.5;background-color:#f7f7f7;color:#999999;font-size:12px;font-family:\'맑은 고딕\',Malgun Gothic,\'나눔고딕\',NanumGothic,\'돋움\',Dotum,\'Helvetica\',\'Apple SD Gothic Neo\',sans-serif;letter-spacing: -0.24px;">\n' +
        '\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t<td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="display: inline-block;">주식회사 섹타나인</span>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="display:inline-block; width:1px; height:10px; background-color:#e5e5e5; margin:0 10px 0 10px;"></span>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="display: inline-block;">사업자 등록번호 : 113-86-10017</span>\n' +
        '\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t<td height="5"></td>\n' +
        '\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t<td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="display: inline-block;">경기도 성남시 중원구 사기막골로31번길 18(상대원동)</span>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="display:inline-block; width:1px; height:10px; background-color:#e5e5e5; margin:0 10px 0 10px;"></span>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span style="display: inline-block;">해피포인트 고객센터 : 080-320-1234</span>\n' +
        '\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t<td height="5"></td>\n' +
        '\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t\t\t\t<td>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<span>Copyright ⓒ 2022 by SPC. ALL RIGHTS RESERVED.</span>\n' +
        '\t\t\t\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t\t\t</table>\n' +
        '\t\t\t\t\t\t\t</td>\n' +
        '\t\t\t\t\t\t\t<td width="40"></td>\n' +
        '\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t\t<tr>\n' +
        '\t\t\t\t\t\t\t<td width="40" height="28"></td>\n' +
        '\t\t\t\t\t\t\t<td></td>\n' +
        '\t\t\t\t\t\t\t<td width="40" height="28"></td>\n' +
        '\t\t\t\t\t\t</tr>\n' +
        '\t\t\t\t\t</table>\n' +
        '\t\t\t\t</td>\n' +
        '\t\t\t</tr>\n' +
        '\t\t\t<!-- //메일푸터 -->\n' +
        '\t\t</table>\n' +
        '\t</div>\n' +
        '\n' +
        '</body>\n' +
        '\n' +
        '</html>'
        let vList = list.split(',')
        let data = ''

        for(var j=0; j<vList.length; j++){

            if(vList[j] == '삼성카드㈜'){
                data += '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t삼성카드\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t삼성카드㈜\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트 적립/사용 등<br>서비스의 제공\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>'
            } else if(vList[j] == '현대백화점㈜') {
                data += '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t현대<br>백화점카드\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t현대백화점㈜\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; border-top: 1px solid #e5e5e5; text-align: center">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트 적립/사용 등<br>서비스의 제공\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>'
            } else if(vList[j] == '비씨카드㈜'){
                data += '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBC카드\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t비씨카드㈜\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; border-top: 1px solid #e5e5e5; text-align: center">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트 적립/사용 등<br>서비스의 제공\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>'
            } else if(vList[j] == '㈜카카오(다음마이원월렛)'){
                data += '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t다음<br>마이원카드\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t㈜카카오<br>(다음마이원월렛)\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; border-top: 1px solid #e5e5e5; text-align: center">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트 적립/사용 등<br>서비스의 제공\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>'
            } else if(vList[j] == '하나카드㈜'){
                data += '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t하나카드\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t하나카드㈜\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; border-top: 1px solid #e5e5e5; text-align: center">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트 적립/사용 등<br>서비스의 제공\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>'
            } else if(vList[j] == '삼성전자㈜(삼성페이)'){
                data += '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t삼성페이\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t㈜삼성전자\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; border-top: 1px solid #e5e5e5; text-align: center">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트 적립/사용 등<br>서비스의 제공\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>'
            } else if(vList[j] == '㈜한국씨티은행'){
                data += '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t씨티카드\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t㈜한국씨티은행\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; border-top: 1px solid #e5e5e5; text-align: center">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트 적립/사용 등<br>서비스의 제공\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>'
            } else if(vList[j] == '롯데카드㈜'){
                data += '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t롯데카드\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t롯데카드㈜\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; border-top: 1px solid #e5e5e5; text-align: center">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트 적립/사용 등<br>서비스의 제공\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>'
            } else if(vList[j] == '㈜지에스리테일'){
                data += '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGS팝카드\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t㈜지에스리테일\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; border-top: 1px solid #e5e5e5; text-align: center">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트 적립/사용 등<br>서비스의 제공\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>'
            } else if(vList[j] == '현대카드㈜'){
                data += '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t현대카드\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t현대카드㈜\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; border-top: 1px solid #e5e5e5; text-align: center">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트 적립/사용 등<br>서비스의 제공\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>   '
            } else if(vList[j] == '신한카드㈜'){
                data += '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t신한카드\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t신한카드㈜\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; border-top: 1px solid #e5e5e5; text-align: center">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트 적립/사용 등<br>서비스의 제공\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>  '
            } else if(vList[j] == '㈜KB국민카드'){
                data += '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t국민카드\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t㈜KB국민카드\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; border-top: 1px solid #e5e5e5; text-align: center">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트 적립/사용 등<br>서비스의 제공\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>'
            } else if(vList[j] == '㈜얍컴퍼니'){
                data += '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYAP\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t㈜얍컴퍼니\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; border-top: 1px solid #e5e5e5; text-align: center">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트 적립/사용 등<br>서비스의 제공\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>'
            } else if(vList[j] == '㈜카카오페이'){
                data += '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t카카오\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t㈜카카오페이\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; border-top: 1px solid #e5e5e5; text-align: center">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트 적립/사용 등<br>서비스의 제공\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>'
            } else if(vList[j] == '네이버파이낸셜 주식회사'){
                data += '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t네이버페이\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; text-align: center; border-right: 1px solid #e5e5e5; border-top: 1px solid #e5e5e5;">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t네이버파이낸셜㈜\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding: 15px 20px; border-top: 1px solid #e5e5e5; text-align: center">\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t해피포인트 적립/사용 등<br>서비스의 제공\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
                    '\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>'
            }
        }

        let total =header + data + footer

        fs.writeFileSync(vList+'.html',total)
}

async function writeCsv(name,list) {
    let result = Object.keys(list[0]).join(',') + '\n';

    for (let i = 0; i < list.length; i++) {
        let stringified = Object.values(list[i]).join(',') + '\n';
        result += stringified;
    }

    fs.writeFileSync(name+'.csv',result)
}

async function makeEmailResouce(val,callback){
    const list = val.reduce(function (carry, el) {
        var group = el.BRNDS_NM;

        if (carry[group] === undefined) {
            carry[group] = []
        }

        carry[group].push(el)
        return carry
    }, {})

    for(var value in list){
        writeHtml (value)
        writeCsv(value,list[value])
    }

    if (typeof callback === 'function') callback();
}

module.exports= {
    writeHtml,
    writeCsv,
    makeEmailResouce
}