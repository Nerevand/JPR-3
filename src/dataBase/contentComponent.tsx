import React from "react";

import "./style.css";

export const contentComponent: any = [
  <pre className="pre-content-wrapper">
    <code className="language-javascript">
      <code className="punctuation">[</code>
      <code className="punctuation">]</code>
      <code className="punctuation">.</code>
      <code className="function">push</code>
      <code className="punctuation">(</code>
      <code className="number">1</code>
      <code className="punctuation">,</code>
      <code className="number">2</code>
      <code className="punctuation">)</code>
      <code className="punctuation">.</code>
      <code className="function">unshift</code>
      <code className="punctuation">(</code>
      <code className="number">3</code>
      <code className="punctuation">)</code>
      <code className="punctuation">.</code>
      <code className="function">join</code>
      <code className="punctuation">(</code>
      <code className="punctuation">)</code>
    </code>
  </pre>,
  <pre className="pre-content-wrapper">
    <code className=" language-javascript">
      <code className="function">alert</code>
      <code className="punctuation">(</code> <code className="string">"1"</code>
      <code className="punctuation">[</code>
      <code className="number">0</code>
      <code className="punctuation">]</code>{" "}
      <code className="punctuation">)</code>
      <code className="punctuation">;</code>
    </code>
  </pre>,
  <pre className="pre-content-wrapper">
    <code className=" language-javascript">
      <code className="function">alert</code>
      <code className="punctuation">(</code>str
      <code className="punctuation">)</code>
      <code className="punctuation">;</code>{" "}
      <code className="comment">// ?</code>
      <br />
      <code className="keyword">let</code> str{" "}
      <code className="operator">=</code>{" "}
      <code className="string">"Hello"</code>
      <code className="punctuation">;</code>
    </code>
  </pre>,
  <pre className="pre-content-wrapper">
    <code className=" language-javascript">
      <code className="function">f</code>
      <code className="punctuation">.</code>
      <code className="function">call</code>
      <code className="punctuation">(</code>
      <code className="keyword">null</code>
      <code className="punctuation">)</code>
      <code className="punctuation">;</code>
      <br />
      <br />
      <code className="keyword">function</code>{" "}
      <code className="function">f</code>
      <code className="punctuation">(</code>
      <code className="punctuation">)</code>{" "}
      <code className="punctuation">{`{`}</code>
      <br />
      <code className="function">alert</code>
      <code className="punctuation">(</code>
      <code className="keyword">this</code>
      <code className="punctuation">)</code>
      <code className="punctuation">;</code>
      <br />
      <code className="punctuation">{`}`}</code>
    </code>
  </pre>,
  <pre className="pre-content-wrapper">
    <code className=" language-javascript">
      <code className="keyword">for</code>
      <code className="punctuation">(</code>
      <code className="keyword">var</code> i<code className="operator">=</code>
      <code className="number">0</code>
      <code className="punctuation">;</code> i
      <code className="operator">&lt;</code>
      <code className="number">10</code>
      <code className="punctuation">;</code> i
      <code className="operator">++</code>
      <code className="punctuation">)</code>{" "}
      <code className="punctuation">{`{`}</code>
      <br />
      <code className="function">setTimeout</code>
      <code className="punctuation">(</code>
      <code className="keyword">function</code>
      <code className="punctuation">(</code>
      <code className="punctuation">)</code>{" "}
      <code className="punctuation">{`{`}</code>
      <br />
      <code className="function">alert</code>
      <code className="punctuation">(</code>i
      <code className="punctuation">)</code>
      <code className="punctuation">;</code>
      <br />
      <code className="punctuation">{`}`}</code>
      <code className="punctuation">,</code> <code className="number">100</code>
      <code className="punctuation">)</code>
      <code className="punctuation">;</code>
      <br />
      <code className="punctuation">{`}`}</code>
    </code>
  </pre>,
  <pre className="pre-content-wrapper">
    <code className=" language-javascript">
      <code className="keyword">if</code>
      <code className="punctuation">(</code> x{" "}
      <code className="operator">&lt;=</code>{" "}
      <code className="number">100</code> <code className="punctuation">)</code>{" "}
      <code className="punctuation">{`{`}</code>
      <code className="operator">...</code>
      <code className="punctuation">{`}`}</code>
      <br />
      <code className="comment">// и</code>
      <br />
      <code className="keyword">if</code>
      <code className="punctuation">(</code> <code className="operator">!</code>
      <code className="punctuation">(</code>x{" "}
      <code className="operator">&gt;</code> <code className="number">100</code>
      <code className="punctuation">)</code>{" "}
      <code className="punctuation">)</code>{" "}
      <code className="punctuation">{`{`}</code>
      <code className="operator">...</code>
      <code className="punctuation">{`}`}</code>
    </code>
  </pre>,
  <pre className="pre-content-wrapper">
    <code className=" language-javascript">
      <code className="keyword">null</code> <code className="operator">+</code>{" "}
      <code className="punctuation">{`{`}</code>
      <code className="number">0</code>
      <code className="punctuation">:</code>
      <code className="number">1</code>
      <code className="punctuation">{`}`}</code>
      <code className="punctuation">[</code>
      <code className="number">0</code>
      <code className="punctuation">
        ]
      </code> <code className="operator">+</code>{" "}
      <code className="punctuation">[</code>
      <code className="punctuation">,</code>
      <code className="punctuation">[</code>
      <code className="number">1</code>
      <code className="punctuation">]</code>
      <code className="punctuation">,</code>
      <code className="punctuation">]</code>
      <code className="punctuation">[</code>
      <code className="number">1</code>
      <code className="punctuation">]</code>
      <code className="punctuation">[</code>
      <code className="number">0</code>
      <code className="punctuation">]</code>
    </code>
  </pre>,
  <pre className="pre-content-wrapper">
    <code className=" language-javascript">
      <code className="keyword">for</code>
      <code className="punctuation">(</code>
      <code className="keyword">let</code> key{" "}
      <code className="keyword">in</code>{" "}
      <code className="punctuation">{`{`}</code>
      <code className="number">1</code>
      <code className="punctuation">:</code>
      <code className="number">1</code>
      <code className="punctuation">,</code> <code className="number">0</code>
      <code className="punctuation">:</code>
      <code className="number">0</code>
      <code className="punctuation">{`}`}</code>
      <code className="punctuation">)</code>{" "}
      <code className="punctuation">{`{`}</code>
      <br />
      <code className="function">alert</code>
      <code className="punctuation">(</code>key
      <code className="punctuation">)</code>
      <code className="punctuation">;</code>
      <br />
      <code className="punctuation">{`}`}</code>
    </code>
  </pre>,
  <pre className="pre-content-wrapper">
    <code className=" language-javascript">
      <code className="keyword">break</code> me
      <code className="punctuation">;</code>
    </code>
  </pre>,
  <pre className="pre-content-wrapper">
    <code className=" language-javascript">
      <code className="keyword">function</code>{" "}
      <code className="function">User</code>
      <code className="punctuation">(</code>
      <code className="punctuation">)</code>{" "}
      <code className="punctuation">{`{`}</code>{" "}
      <code className="punctuation">{`}`}</code>
      <br />
      <code className="class-name">User</code>
      <code className="punctuation">.</code>prototype{" "}
      <code className="operator">=</code>{" "}
      <code className="punctuation">{`{`}</code> admin
      <code className="punctuation">:</code>{" "}
      <code className="boolean">false</code>{" "}
      <code className="punctuation">{`}`}</code>
      <code className="punctuation">;</code>
      <br />
      <br />
      <code className="keyword">let</code> user{" "}
      <code className="operator">=</code> <code className="keyword">new</code>{" "}
      <code className="class-name">User</code>
      <code className="punctuation">(</code>
      <code className="punctuation">)</code>
      <code className="punctuation">;</code>
      <br />
      <br />
      <code className="class-name">User</code>
      <code className="punctuation">.</code>prototype{" "}
      <code className="operator">=</code>{" "}
      <code className="punctuation">{`{`}</code> admin
      <code className="punctuation">:</code>{" "}
      <code className="boolean">true</code>{" "}
      <code className="punctuation">{`}`}</code>
      <code className="punctuation">;</code>
      <br />
      <br />
      <code className="function">alert</code>
      <code className="punctuation">(</code>user
      <code className="punctuation">.</code>admin
      <code className="punctuation">)</code>
      <code className="punctuation">;</code>
    </code>
  </pre>,
  <pre className="pre-content-wrapper">
    <code className=" language-javascript">
      <code className="keyword">let</code> str{" "}
      <code className="operator">=</code>{" "}
      <code className="string">"Hello"</code>
      <code className="punctuation">;</code>
      <br />
      str<code className="punctuation">.</code>something{" "}
      <code className="operator">=</code> <code className="number">5</code>
      <code className="punctuation">;</code>
      <br />
      <code className="function">alert</code>
      <code className="punctuation">(</code>str
      <code className="punctuation">.</code>something
      <code className="punctuation">)</code>
      <code className="punctuation">;</code>{" "}
      <code className="comment">// ?</code>
    </code>
  </pre>,
  <pre className="pre-content-wrapper">
    <code className=" language-javascript">
      <code className="keyword">function</code>{" "}
      <code className="function">User</code>
      <code className="punctuation">(</code>
      <code className="punctuation">)</code>{" "}
      <code className="punctuation">{`{`}</code>{" "}
      <code className="punctuation">{`}`}</code>
      <br />
      <br />
      <code className="keyword">let</code> vasya{" "}
      <code className="operator">=</code> <code className="keyword">new</code>{" "}
      <code className="class-name">User</code>
      <code className="punctuation">(</code>
      <code className="punctuation">)</code>
      <code className="punctuation">;</code>
      <br />
      <br />
      vasya<code className="punctuation">.</code>__proto__
      <code className="punctuation">.</code>name{" "}
      <code className="operator">=</code>{" "}
      <code className="string">"Vasya"</code>
      <code className="punctuation">;</code>
    </code>
  </pre>,
  <pre className="pre-content-wrapper">
    <code className=" language-javascript">
      <code className="keyword">function</code>{" "}
      <code className="function">b</code>
      <code className="punctuation">(</code>x,y,a
      <code className="punctuation">)</code>{" "}
      <code className="punctuation">{`{`}</code> <br />
      <code className="function">arguments</code>
      <code className="punctuation">[</code>
      <code className="number">2</code>
      <code className="punctuation">]</code>
      {" = "}
      <code className="number">10</code>
      <code className="punctuation">;</code>
      <br />
      <code className="function">alert</code>
      <code className="punctuation">(</code>
      <code className="keyword">a</code>
      <code className="punctuation">)</code>
      <code className="punctuation">;</code>
      <br />
      <code className="punctuation">{`}`}</code>
      <br />
      <code className="keyword">b</code>
      <code className="punctuation">(</code>
      <code className="number">1</code>
      <code className="punctuation">,</code>
      <code className="number">2</code>
      <code className="punctuation">,</code>
      <code className="number">3</code>
      <code className="punctuation">)</code>
    </code>
  </pre>,
];
