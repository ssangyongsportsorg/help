# 標準功能表
我們提供兩個您可以使用的導航功能表選項，首先是範本上使用的內置功能表，帶有額外的下拉清單和自定義圖示，您只能通過主題的HTML編輯器編輯此功能表。

# 在資訊中心內，點擊模版圖示
按兩下自定義按鈕上的圖示
選擇編輯 HTML，
找到html000小部件，為了更快地搜索，請按下圖示：
編輯 HTML 博客
您將找到如下代碼：

```
<!--[ Standar menu ]-->
<li>
  <!--[ Change attribute href='#' to add url ]-->
  <a class='a' href='#' itemprop='url'>
    <!--[ Icon ]-->
    <b:include name='profiles-icon'/>
  
    <!--[ Title navigation ]-->
    <span class='n' itemprop='name'>About</span>
  </a>
</li>
```
上面的代碼用於添加沒有子功能表的單個功能表。

# 資訊：
使用目標連結更改屬性。href='#'
將標記的單詞替換為所需功能表的標題。
通過將部分中的代碼替換為SVG圖示來添加新圖示，您可以在此處找到它！<b:include name='profiles-icon'/>
帶下拉清單的多功能表
如果需要，您可以在導航中添加多個子功能表。在某些範本上，您可能會找到兩個可用的樣式選項。

```

<!--[ Dropdown style 1 ]-->
<li class='drp'>
  <input class='drpI hidden' id='drpDwn-1' name='drpDwn' type='checkbox'/>
  <label class='a' for='drpDwn-1'>
    <!--[ Icon ]-->
    <b:include name='folder-icon'/>
  
    <!--[ Title navigation ]-->
    <span class='n'>Sub menu</span>

    <b:include name='arow-down-icon'/>
  </label>
  <ul>
    <!--[ Change attribute href='#' to add url ]-->
    <li itemprop='name'><a href='#' itemprop='url'>Sub menu 01</a></li>
    <li itemprop='name'><a href='#' itemprop='url'>Sub menu 02</a></li>
    <li itemprop='name'><a href='#' itemprop='url'>Sub menu 03</a></li>
    <li itemprop='name'><a href='#' itemprop='url'>Sub menu 04</a></li>
  </ul>
</li>
```
第二種樣式下拉清單：

```
<!--[ Dropdown style 2 ]-->
<li class='drp mr br'>
  <input checked='checked' class='drpI hidden' id='drpMr-2' name='drpDwn' type='checkbox'/>
  <label class='a' for='drpMr-2'>
    
    <!--[ Title navigation ]-->
    <span class='n'>More...</span>
  
    <b:include name='arow-down-icon'/>
  </label>
  <ul>
    <!--[ Change attribute href='#' to add url ]-->
    <li itemprop='name'><a class='new' expr:href='data:blog.homepageUrl.canonical params { hl: &quot;ar&quot; }' itemprop='url'>Try RTL Mode</a></li>
  </ul>
</li>
```
