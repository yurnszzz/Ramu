"""Manage optional local design references; never part of the website runtime."""

import argparse
from pathlib import Path
import shutil
import subprocess

ROOT = Path(__file__).resolve().parents[1]
DESTINATION = ROOT / ".agents" / "skills"
NAMES = ("impeccable", "ui-ux-pro-max", "design-taste-frontend")


def install(project):
    if (ROOT / ".local" / "skills-disabled").exists():
        raise SystemExit("Installation disabled by .local/skills-disabled.")
    if not project:
        raise SystemExit("Provide --from-project pointing to your local reference project.")
    project = Path(project).resolve()
    sources = {}
    for name in NAMES:
        for folder in (".agents", ".codex", ".claude", ".agent"):
            candidate = project / folder / "skills" / name
            if (candidate / "SKILL.md").is_file():
                sources[name] = candidate
                break
    missing = set(NAMES) - sources.keys()
    if missing:
        raise SystemExit("Missing source skills: " + ", ".join(sorted(missing)))
    for name, source in sources.items():
        target = DESTINATION / name
        if target.exists():
            print(f"Kept existing local copy: {name}")
            continue
        shutil.copytree(source, target, ignore=shutil.ignore_patterns(
            ".git", "node_modules", "__pycache__", "*.pyc"
        ))
        print(f"Installed local copy: {name}")


def status():
    disabled = (ROOT / ".local" / "skills-disabled").exists()
    print("Installation: " + ("disabled" if disabled else "enabled"))
    for name in NAMES:
        present = (DESTINATION / name / "SKILL.md").is_file()
        print(f"{name}: {'present' if present else 'missing'}")


def check_git():
    result = subprocess.run(
        ["git", "-c", f"safe.directory={ROOT.as_posix()}", "ls-files", "-z"],
        cwd=ROOT, text=True, capture_output=True, check=True,
    )
    private = (".agents/", ".agent/", ".codex/", ".claude/", ".local/",
               ".taste-skill/", ".impeccable/", "node_modules/")
    leaks = [path for path in result.stdout.split("\0") if path.startswith(private)]
    if leaks:
        raise SystemExit("Local files tracked by Git:\n" + "\n".join(leaks))
    print("OK: local skills and working artifacts are not tracked.")


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("command", choices=("install", "status", "check-git"))
parser.add_argument("--from-project")
args = parser.parse_args()
if args.command == "install":
    install(args.from_project)
elif args.command == "status":
    status()
else:
    check_git()
