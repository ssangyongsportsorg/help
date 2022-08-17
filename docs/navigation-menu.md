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
如何添加新的下拉功能表？
要添加新的下拉功能表，請複製上述代碼之一併將其粘貼到所需的部分中，確保屬性具有相同的值。ID 必須是唯一的，一個頁面中不能有兩個相等的ID。id='...'for='...'

在功能表上添加或替換圖示
我們已經在導航代碼中標記了圖示部分，您可以使用其他代碼進行更改。<svg>

在這裡，我們為您提供正確替換圖示例：

```

<!--[ Icon ]-->
<b:include name='profiles-icon'/>
<!--[ Icon ]-->
<svg class='line'xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.749500, 2.549500)'><path d='M6.809,18.9067 C3.137,18.9067 9.41469125e-14,18.3517 9.41469125e-14,16.1277 C9.41469125e-14,13.9037 3.117,11.8997 6.809,11.8997 C10.481,11.8997 13.617,13.8847 13.617,16.1077 C13.617,18.3307 10.501,18.9067 6.809,18.9067 Z'></path><path d='M6.809,8.728 C9.219,8.728 11.173,6.774 11.173,4.364 C11.173,1.954 9.219,-2.48689958e-14 6.809,-2.48689958e-14 C4.399,-2.48689958e-14 2.44496883,1.954 2.44496883,4.364 C2.436,6.766 4.377,8.72 6.778,8.728 L6.809,8.728 Z'></path><path d='M14.0517,7.5293 C15.4547,7.1543 16.4887007,5.8753 16.4887007,4.3533 C16.4897,2.7653 15.3627,1.4393 13.8647,1.1323'></path><path d='M14.7113,11.104 C16.6993,11.104 18.3973,12.452 18.3973,13.655 C18.3973,14.364 17.8123,15.092 16.9223,15.301'></path></g></svg>
```
添加分界線
如果您注意範本演示，則在一個功能表和另一個功能表之間有一條分界線。只需向標籤添加類名即可使用它，正確的實現示例如下：br<li>

```
<!--[ Standar menu ]-->
<li>
  <!--[ Change attribute href='#' to add url ]-->
  ...
    <!--[ Icon ]-->
    ...
  
    <!--[ Title navigation ]-->
    ...
  ...
</li>

<!--[ Dropdown style 1 ]-->
<li class='drp'>
  ...
</li>
<!--[ Standar menu ]-->
<li class='br'>
  <!--[ Change attribute href='#' to add url ]-->
  ...
    <!--[ Icon ]-->
    ...
  
    <!--[ Title navigation ]-->
    ...
  ...
</li>

<!--[ Dropdown style 1 ]-->
<li class='drp br'>
  ...
</li>
```
