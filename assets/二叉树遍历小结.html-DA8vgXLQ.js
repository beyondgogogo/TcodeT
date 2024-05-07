import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-BFq_ubM0.js";const e="/TcodeT/assets/image-20240404152511532-BmGC6_le.png",p="/TcodeT/assets/image-20240407112529876-EFqiYNes.png",o="/TcodeT/assets/image-20240408180707152-D9wRkVns.png",c={},l=t(`<h1 id="二叉树的遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的遍历"><span>二叉树的遍历</span></a></h1><blockquote><p>bg:最近有把二叉树的前中后序遍历+层序遍历完成，今天做个小结顺便把涉及到的题目简单过一遍。</p><p>尤其是递归+迭代的双解法</p></blockquote><h2 id="_1-前序遍历" tabindex="-1"><a class="header-anchor" href="#_1-前序遍历"><span>1.前序遍历</span></a></h2><h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归"><span>递归</span></a></h3><blockquote><p>递归法呢，只要理解了都是比较简单的，也不用多想。我对递归其实也不是很会写，可能目前最大的感想估计就是说看递归最好站在高处看它，抓住递归函数是要干嘛，再去思考里面的递归终止条件和递归式</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">preorderTraversal</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">preorder</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//先序遍历  中——左——右</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">preorder</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">preorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">preorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//或者呢也可以把res作为全局变量，这样在递归函数中就可以不传入参数来存储节点数据了。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代"><span>迭代</span></a></h3><blockquote><p>迭代法是我认为需要好好掌握的，对我个人而言有以下两点：1.他会涉及到一些数据结构 2.他有更多的操作空间（递归能写出来就很好了，但很可能不好去想它中间的过程，所以很多题目需要在其中去加入一些处理的话就不太好弄了）</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>
<span class="token comment">//注意：我们这里演示的是迭代风格不统一的代码，和层序遍历很类似，只不过实现是使用栈实现的</span>
<span class="token comment">//当然也可以根据个人喜好选择与中序遍历风格一致的代码</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">preorderTraversal</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     
     <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> stack<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> list<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token class-name">TreeNode</span> node<span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//中间节点，最先</span>
         list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//先加入右边节点，后出</span>
         <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
             stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token comment">//后加入左子树，先出</span>
         <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
             stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">return</span> list<span class="token punctuation">;</span>

 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*与中序统一的方式；基本想法是，先把所有中间节点add，再放左，回溯，再放右
while (!stack.isEmpty() || node != null) {
         while (node != null) {
             res.add(node.val);
             stack.push(node);
             node = node.left;
         }
         node = stack.pop();
         node = node.right;
}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：</p><p>1.我们使用Deque来模拟栈，Queue做不到对吧，同时实现的接口是LinkedList，可以记住集合的基础关系</p><figure><img src="`+e+`" alt="image-20240404152511532" tabindex="0" loading="lazy"><figcaption>image-20240404152511532</figcaption></figure><p>红框是最常用的几个，当然其他不常用的原因也要自己对比一下。</p></blockquote><h2 id="_2-中序遍历" tabindex="-1"><a class="header-anchor" href="#_2-中序遍历"><span>2.中序遍历</span></a></h2><h3 id="递归-1" tabindex="-1"><a class="header-anchor" href="#递归-1"><span>递归</span></a></h3><blockquote><p>略：同上</p></blockquote><h3 id="迭代-1" tabindex="-1"><a class="header-anchor" href="#迭代-1"><span>迭代</span></a></h3><blockquote><p>中序遍历很重要，因为左——中——右的这种递归方式结合二叉搜索树或者有序数组很好出题，所以这个迭代法一定要记住！（比如二叉搜索树的第K大的数）</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//前序</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> node <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>node <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
          stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
          node <span class="token operator">=</span> node<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//中序：其实也就是把前序调换了一下位置，why？前序是先加root再加left</span>
<span class="token comment">//而中序则是先加left，再加root</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> node <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>node <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">//res.add(node.val);</span>
          stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
          node <span class="token operator">=</span> node<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调换到此处</span>
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

如果不清楚的话可以模拟几遍，相信会清楚不少
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="_3-后序遍历" tabindex="-1"><a class="header-anchor" href="#_3-后序遍历"><span>3.后序遍历</span></a></h2><h3 id="递归-2" tabindex="-1"><a class="header-anchor" href="#递归-2"><span>递归</span></a></h3><blockquote><p>略：同上</p></blockquote><h3 id="迭代-2" tabindex="-1"><a class="header-anchor" href="#迭代-2"><span>迭代</span></a></h3><blockquote><p>后序遍历的迭代法我们借助前序遍历来解决</p><p>前序不是：中——左——右吗，那我们加入节点时调换左右节点位置，变为中——右——左。</p><p>再把这个结果颠倒就是咱们需要的左-右-中了。之所以要采用这种间接的方式也是因为其迭代法不太好去实现理解。</p><p>Colletctions.reverse(result);</p></blockquote><h2 id="_4-层序遍历" tabindex="-1"><a class="header-anchor" href="#_4-层序遍历"><span>4.层序遍历</span></a></h2><h3 id="迭代-3" tabindex="-1"><a class="header-anchor" href="#迭代-3"><span>迭代</span></a></h3><blockquote><p>因为层序遍历的递归感觉很抽象，也没太必要记住（有错纠正），所以这里只演示层序遍历的迭代法。层序遍历呢也是十分重要的一个知识点，可以出题的方向有很多地方，其书写也是很简单易懂。</p><figure><img src="`+p+`" alt="image-20240407112529876" tabindex="0" loading="lazy"><figcaption>image-20240407112529876</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>层序遍历这边使用 队列这种数据结构来实现
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常见题目：如二叉树的右视图</p></blockquote><h1 id="二叉树的构造" tabindex="-1"><a class="header-anchor" href="#二叉树的构造"><span>二叉树的构造</span></a></h1><p><strong>一般传入数组为<code>层序遍历</code>：</strong></p><figure><img src="`+o+`" alt="image-20240408180707152" tabindex="0" loading="lazy"><figcaption>image-20240408180707152</figcaption></figure><p>构造的方式采用递归方案：<code>new根节点</code>，再<code>递归构造左右子树</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//此递归函数的含义在于：构建以index的数组元素为root的一棵树。注意为什么是这个index</span>
<span class="token keyword">private</span> <span class="token class-name">TreeNode</span> <span class="token function">constructBinaryTree</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeNode</span> node <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token comment">// 判断索引是否超出数组范围</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">constructBinaryTree</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 构建左子树</span>
            node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">constructBinaryTree</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> index <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 构建右子树</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> node<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),i=[l];function u(r,k){return s(),a("div",null,i)}const m=n(c,[["render",u],["__file","二叉树遍历小结.html.vue"]]),b=JSON.parse('{"path":"/zh/post/%E4%BA%8C%E5%8F%89%E6%A0%91%E9%81%8D%E5%8E%86%E5%B0%8F%E7%BB%93.html","title":"二叉树的遍历","lang":"zh-CN","frontmatter":{"description":"二叉树的遍历 bg:最近有把二叉树的前中后序遍历+层序遍历完成，今天做个小结顺便把涉及到的题目简单过一遍。 尤其是递归+迭代的双解法 1.前序遍历 递归 递归法呢，只要理解了都是比较简单的，也不用多想。我对递归其实也不是很会写，可能目前最大的感想估计就是说看递归最好站在高处看它，抓住递归函数是要干嘛，再去思考里面的递归终止条件和递归式 迭代 迭代法是我...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/TcodeT/zh/post/%E4%BA%8C%E5%8F%89%E6%A0%91%E9%81%8D%E5%8E%86%E5%B0%8F%E7%BB%93.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"二叉树的遍历"}],["meta",{"property":"og:description","content":"二叉树的遍历 bg:最近有把二叉树的前中后序遍历+层序遍历完成，今天做个小结顺便把涉及到的题目简单过一遍。 尤其是递归+迭代的双解法 1.前序遍历 递归 递归法呢，只要理解了都是比较简单的，也不用多想。我对递归其实也不是很会写，可能目前最大的感想估计就是说看递归最好站在高处看它，抓住递归函数是要干嘛，再去思考里面的递归终止条件和递归式 迭代 迭代法是我..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-07T06:26:58.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2024-05-07T06:26:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二叉树的遍历\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-07T06:26:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1.前序遍历","slug":"_1-前序遍历","link":"#_1-前序遍历","children":[{"level":3,"title":"递归","slug":"递归","link":"#递归","children":[]},{"level":3,"title":"迭代","slug":"迭代","link":"#迭代","children":[]}]},{"level":2,"title":"2.中序遍历","slug":"_2-中序遍历","link":"#_2-中序遍历","children":[{"level":3,"title":"递归","slug":"递归-1","link":"#递归-1","children":[]},{"level":3,"title":"迭代","slug":"迭代-1","link":"#迭代-1","children":[]}]},{"level":2,"title":"3.后序遍历","slug":"_3-后序遍历","link":"#_3-后序遍历","children":[{"level":3,"title":"递归","slug":"递归-2","link":"#递归-2","children":[]},{"level":3,"title":"迭代","slug":"迭代-2","link":"#迭代-2","children":[]}]},{"level":2,"title":"4.层序遍历","slug":"_4-层序遍历","link":"#_4-层序遍历","children":[{"level":3,"title":"迭代","slug":"迭代-3","link":"#迭代-3","children":[]}]}],"git":{"createdTime":1715063218000,"updatedTime":1715063218000,"contributors":[{"name":"tian","email":"271@qq.com","commits":1}]},"readingTime":{"minutes":3.8,"words":1141},"filePathRelative":"zh/post/二叉树遍历小结.md","localizedDate":"2024年5月7日","excerpt":"\\n<blockquote>\\n<p>bg:最近有把二叉树的前中后序遍历+层序遍历完成，今天做个小结顺便把涉及到的题目简单过一遍。</p>\\n<p>尤其是递归+迭代的双解法</p>\\n</blockquote>\\n<h2>1.前序遍历</h2>\\n<h3>递归</h3>\\n<blockquote>\\n<p>递归法呢，只要理解了都是比较简单的，也不用多想。我对递归其实也不是很会写，可能目前最大的感想估计就是说看递归最好站在高处看它，抓住递归函数是要干嘛，再去思考里面的递归终止条件和递归式</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Solution</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token function\\">preorderTraversal</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">TreeNode</span> root<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span></span> res <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ArrayList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token function\\">preorder</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">,</span> res<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">return</span> res<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token comment\\">//先序遍历  中——左——右</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">preorder</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">TreeNode</span> root<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span></span> res<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>root <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        res<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>val<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token function\\">preorder</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>left<span class=\\"token punctuation\\">,</span> res<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token function\\">preorder</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>right<span class=\\"token punctuation\\">,</span> res<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">//或者呢也可以把res作为全局变量，这样在递归函数中就可以不传入参数来存储节点数据了。</span>\\n\\n</code></pre></div></blockquote>","autoDesc":true}');export{m as comp,b as data};
