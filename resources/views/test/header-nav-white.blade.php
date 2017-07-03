<style>
    .header__nav {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        min-height: 60px;
    }
    .header__nav--white:before {
        background: rgba(255, 255, 255, 0.2);
    }
    .header__nav:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.15);
    }
    .header__nav__item.isActive {
        background: #0c74c4;
        border-color: #0c74c4;
        color: #fff;
    }
    .header__nav__item {
        z-index: 1;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font: 400 12px/1 'Helvetica', arial, sans-serif;
        color: #333333;
        border: 1px solid rgba(0, 0, 0, 0.16);
        border-radius: 50%;
        width: 40px;
        min-width: 40px;
        height: 40px;
        margin: 10px;
        background: #fff;
    }
    a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    }

    a:-webkit-any-link {
    color: -webkit-link;
    cursor: auto;
    text-decoration: underline;
    }
</style>

<div class="header__nav header__nav--white">
    <a class="header__nav__item" href="#">1</a>
    <a class="header__nav__item isActive" href="#">2</a>
    <div class="header__nav__item isDisabled">3</div>
</div>