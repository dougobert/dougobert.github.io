import os
import shutil
from datetime import datetime
from pathlib import Path

gallery_root = Path('content/gallery')
photo_exts = {'.jpg', '.jpeg', '.png', '.webp'}

def humanize_title(filename):
    name = os.path.splitext(filename)[0]
    return name.replace('_', ' ').replace('-', ' ').title()

def organize_photos():
    for category in gallery_root.iterdir():
        if not category.is_dir():
            continue
        for photo in category.iterdir():
            if photo.is_file() and photo.suffix.lower() in photo_exts:
                subfolder = category / photo.stem
                subfolder.mkdir(exist_ok=True)
                new_photo_path = subfolder / photo.name
                shutil.move(str(photo), str(new_photo_path))
                index_md = subfolder / 'index.md'
                date_str = datetime.fromtimestamp(new_photo_path.stat().st_mtime).strftime('%Y-%m-%d')
                image_path = f"/gallery/{category.name}/{photo.stem}/{photo.name}"
                frontmatter = f"""---\ntitle: \"{humanize_title(photo.name)}\"\ndate: {date_str}\ntags: [{category.name}]\nbuy_link: \"\"\nimage: \"{image_path}\"\n---\n"""
                with open(index_md, 'w', encoding='utf-8') as f:
                    f.write(frontmatter)

if __name__ == '__main__':
    organize_photos()
