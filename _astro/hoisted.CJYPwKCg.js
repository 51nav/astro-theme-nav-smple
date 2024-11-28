import"./Sidebar.astro_astro_type_script_index_0_lang.DSrKbc4P.js";const s=document.getElementById("submitForm");s?.addEventListener("submit",n=>{n.preventDefault();const t=new FormData(n.target),e={title:t.get("title"),url:t.get("url"),description:t.get("description"),advantages:t.get("advantages")?.toString().split(`
`).filter(Boolean),category:t.get("category")},a=`
### 网站提交

- **名称**：${e.title}
- **链接**：${e.url}
- **描述**：${e.description}
- **分类**：${e.category}

#### 优势特点：
${e.advantages?.map(r=>`- ${r}`).join(`
`)}

---
请审核，谢谢！
    `.trim(),o=document.querySelector("iframe.giscus-frame");o?.contentWindow&&(o.contentWindow.postMessage({giscus:{setComment:a}},"https://giscus.app"),n.target.reset())});
