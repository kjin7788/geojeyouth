$(function () {
    // 전체메뉴 버튼 클릭 시
    $('.all-menu').click(function () {
        $('.all-menu-mask, .all-menu-wrapper').addClass('active');
    });

    // 닫기 버튼 클릭 시
    $('.all-menu-close').click(function () {
        $('.all-menu-mask, .all-menu-wrapper').removeClass('active');
    });
    
        const $mbBtn = $('.mb-bt');           // 모바일 버튼
        const $mbNav = $('.mb-nav');         // 모바일 내비게이션
        const $mbMenuMask = $('.mb-menu-mask'); // 모바일 메뉴 마스크
        const $mbMenuList = $('.mb-menu-list'); // 메뉴 리스트
        const $mbMainMenu = $('.mb-main-menu'); // 메인 메뉴
    
        // 모바일 버튼 클릭 이벤트
        $mbBtn.click(function () {
            if ($mbBtn.hasClass('active')) {
                // 활성화 상태 → 닫기
                $mbBtn.removeClass('active'); // 버튼 활성화 해제
                $mbNav.removeClass('active'); // 네비게이션 숨김
                $mbMenuMask.removeClass('active'); // 마스크 숨김
                $mbMenuList.css('height', '55px'); // 메뉴 높이 초기화
                $mbMainMenu.removeClass('open'); // 하위 메뉴 닫기
            } else {
                // 비활성화 상태 → 열기
                $mbBtn.addClass('active'); // 버튼 활성화
                $mbNav.addClass('active'); // 네비게이션 보이기
                $mbMenuMask.addClass('active'); // 마스크 보이기
            }
        });
   
});