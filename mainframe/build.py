import os

def read_template():
    with open("page_tmpl.html", "r") as f:
        html = f.read()
    return html

def write_content_to_template(content):
    tmpl_html = read_template()
    return tmpl_html.replace("{CONTENT}", content)


BUILD_DIR = 'build'
POSTS_DIR = './posts'


######################## List posts ####################################

posts = [ post for post in os.listdir(POSTS_DIR) if post.endswith('.html') ]

posts = sorted(posts)

######################## Index ####################################

post_links = [
    f"<p><a href='{BUILD_DIR}/{post}'>{post.replace('.html','')}</a></p>" for post in posts 
]

post_links = ''.join(post_links)

content = f"<div class='blog-posts'>{post_links}</div>"

index_html = write_content_to_template(content)

with open("index.html", "w+") as f:
    f.write(index_html)

######################## Create post pages ####################################

for post in posts:
    
    with open(f"{POSTS_DIR}/{post}", "r") as f:
        html = f.read()
    
    html = write_content_to_template(html)

    with open(f"{BUILD_DIR}/{post}", "w+") as f:
        f.write(html)

