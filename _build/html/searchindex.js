Search.setIndex({"docnames": ["env_tests/Environment_Tests", "features_intro", "gradescope_autograder/Extensions", "gradescope_autograder/Gradescope_Autograder", "jupytexmagic/Extensions", "jupytexmagic/Getting_Started", "jupytexmagic/Jupytexmagic", "misc/Miscellaneous", "rise_tests/Rise_Tests", "workflow_tests/Approval", "workflow_tests/Checksum", "workflow_tests/Container_Tests", "workflow_tests/Health", "workflow_tests/Image_version", "workflow_tests/Jupyter_nb", "workflow_tests/Package_version", "workflow_tests/Publish", "workflow_tests/Size_and_time", "workflow_tests/UI"], "filenames": ["env_tests/Environment_Tests.ipynb", "features_intro.md", "gradescope_autograder/Extensions.ipynb", "gradescope_autograder/Gradescope_Autograder.ipynb", "jupytexmagic/Extensions.ipynb", "jupytexmagic/Getting_Started.ipynb", "jupytexmagic/Jupytexmagic.ipynb", "misc/Miscellaneous.ipynb", "rise_tests/Rise_Tests.md", "workflow_tests/Approval.ipynb", "workflow_tests/Checksum.ipynb", "workflow_tests/Container_Tests.ipynb", "workflow_tests/Health.ipynb", "workflow_tests/Image_version.ipynb", "workflow_tests/Jupyter_nb.ipynb", "workflow_tests/Package_version.ipynb", "workflow_tests/Publish.ipynb", "workflow_tests/Size_and_time.ipynb", "workflow_tests/UI.ipynb"], "titles": ["Environment_Tests", "Enhanced OPE", "Extensions", "Gradescope_Autograder", "Extensions", "Getting_Started", "Jupytexmagic", "Miscellaneous", "RISE Test", "Approval", "Checksum", "Container_Tests", "Health", "Image_version", "Jupyter_Notebook", "Package_version", "Publish", "Size_and_time", "UI"], "terms": {"These": [0, 1, 2, 5], "ar": [0, 1, 2, 3, 4, 5, 6, 8, 10], "group": [0, 5], "singl": [0, 5], "notebook": [0, 1, 4, 6, 8, 10], "call": [0, 3, 5], "all_test": 0, "ipynb": [0, 4, 6], "which": [0, 1, 2, 3, 4, 5, 6, 11], "you": [0, 1, 3, 4, 5, 6, 11], "can": [0, 1, 3, 5, 6, 11, 12, 14], "run": [0, 1, 2, 4, 6, 8, 12, 14, 15], "us": [0, 1, 2, 3, 4, 5, 6, 8, 10, 11], "op": [0, 2, 3, 4, 5, 8, 11], "command": [0, 1, 5, 6, 8, 10], "thi": [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 17], "output": [0, 5, 6, 8, 15], "result": [0, 2, 3, 5], "separ": [0, 4, 5, 11, 17], "them": [0, 5], "two": [0, 2, 4, 5, 11], "pass": [0, 11, 15], "fail": [0, 3, 5, 6, 14, 15], "we": [0, 1, 2, 3, 4, 5, 6, 8, 11, 15], "keep": 0, "track": 0, "global": 0, "error": [0, 8], "initi": [0, 4, 5, 8], "below": [0, 5, 11, 12], "var": [0, 5], "have": [0, 2, 3, 4, 5, 6, 8, 10, 11], "import": [0, 1, 4, 5, 6, 8], "subprocess": [0, 5], "os": 0, "def": [0, 5], "shelltest": 0, "cmd": 0, "try": [0, 5], "check_output": 0, "shell": [0, 5], "true": [0, 5], "stderr": [0, 5], "stdout": [0, 5], "return": [0, 5], "0": [0, 5], "decod": [0, 5], "utf": 0, "8": [0, 5], "except": 0, "calledprocesserror": [0, 5], "e": [0, 2, 3, 4, 5, 6, 11], "returncod": 0, "new": [0, 3, 5, 6, 8], "add": 0, "handl": [0, 2, 3], "1": [0, 2, 4, 5, 10, 11], "str": 0, "check": [0, 5, 11, 15], "TO": 0, "f": [0, 5, 10], "touch": 0, "path": [0, 3, 10], "expandus": 0, "test_write_permiss": 0, "tmp": 0, "echo": 0, "ye": 0, "rm": [0, 5], "No": [0, 5, 10], "execut": [0, 1, 8], "append": 0, "els": 0, "confirm": [0, 8], "environ": [0, 5, 8, 11], "set": [0, 3, 5, 6], "from": [0, 2, 3, 4, 5, 8, 15], "dockerfil": [0, 8], "still": [0, 2], "exist": [0, 4, 5, 10], "maintain": [0, 8], "same": [0, 5], "valu": [0, 5], "within": [0, 8], "jupyt": [0, 1, 4, 5, 6, 14], "It": [0, 2, 5, 10], "also": [0, 5, 11], "ensur": [0, 1, 8], "user": [0, 1, 3, 6, 8, 10], "ha": [0, 2, 3, 4, 5, 6, 11], "valid": [0, 2, 8], "uid": 0, "gid": 0, "customiz": 0, "rang": [0, 5], "verifi": [0, 5, 8, 10, 12, 13, 14], "correct": [0, 8, 10], "nb_uid": 0, "int": 0, "nb_gid": 0, "nb_group": 0, "xdg_cache_hom": 0, "nb_user": 0, "cach": 0, "uid_lower_bound": 0, "2000": 0, "uid_upper_bound": 0, "60000": 0, "gid_lower_bound": 0, "gid_upper_bound": 0, "expected_nb_group": 0, "root": 0, "err": 0, "check_environment_test": 0, "accept": 0, "doe": [0, 5], "match": [0, 15], "jovyan": 0, "xdd_cache_hom": 0, "expect": [0, 3, 15], "len": 0, "s": [0, 1, 3, 4, 5, 6, 8, 10, 15, 17], "join": 0, "print": [0, 4, 15], "keyerror": 0, "traceback": [0, 5], "most": [0, 5, 6], "recent": [0, 5], "last": [0, 5, 10], "cell": [4, 5, 6, 8], "In": [1, 5, 8, 10], "3": [0, 5], "line": [3, 5, 6], "5": [0, 1, 5], "6": [0, 5], "7": [0, 5], "file": [1, 3, 4, 5, 6, 8, 10], "miniconda3": 5, "lib": [0, 5], "python3": [0, 5], "10": 5, "py": [0, 3, 5, 8, 15], "680": 0, "_environ": [], "__getitem__": 0, "self": [0, 5], "kei": [0, 1, 2, 3], "677": 0, "_data": [], "encodekei": [], "678": 0, "679": 0, "rais": [0, 5], "origin": 0, "none": [0, 5], "681": 0, "decodevalu": 0, "contain": [0, 2, 3, 10, 11, 12, 14], "connect": [0, 3, 5], "internet": 0, "both": [0, 1, 3, 8], "ping": 0, "curl": 0, "becaus": [0, 3, 4, 5, 6], "some": [0, 2, 5, 6], "system": [0, 5, 10], "mai": [0, 3, 5], "one": [0, 3, 5, 6], "util": [0, 1], "default": [0, 2, 4], "our": [0, 1, 3, 5, 8], "case": [0, 5, 6], "cluster": [0, 2, 3], "configur": [0, 11], "did": 0, "includ": [0, 2, 5, 8, 11], "If": [0, 2, 5, 6, 11, 14, 15], "either": [0, 4, 5], "work": [0, 1, 2, 3, 5, 11], "properli": [0, 4, 5, 6, 12, 14, 15], "otherwis": [0, 15], "e1": 0, "googl": 0, "com": 0, "e2": 0, "packag": [0, 3, 5, 6, 8, 11, 15], "instal": [0, 5, 6, 15], "pytest": 0, "readlink": 0, "gitconfig": 0, "config": [0, 3, 10, 11, 15], "etc": 0, "ssh_config": 0, "check_permiss": 0, "dir_path": 0, "readabl": 0, "writabl": 0, "access": [0, 1, 8], "r_ok": 0, "w_ok": 0, "r": [0, 5], "w": [0, 5], "fals": [0, 5], "identifi": 0, "conda_base_dir": 0, "abspath": 0, "dirnam": 0, "sy": [0, 10], "conda_env_dir": 0, "get": [0, 4, 5], "conda_prefix": 0, "unaccessible_dir": 0, "dir_nam": 0, "base": [0, 3, 5, 10, 11, 15], "n": [0, 5, 10], "all": [0, 3, 4, 5, 6, 8, 10, 11], "aslr": 0, "statu": [0, 5], "enabl": [0, 5], "2": [0, 4, 5, 11], "disabl": 0, "partial": [0, 5], "full": [0, 6], "bin": 0, "sh": [0, 3], "found": 0, "addit": [0, 5, 10], "ad": [0, 5, 11], "suit": 0, "compat": [0, 3, 5, 8], "need": [0, 2, 3, 4, 5, 6], "textbook": [0, 4], "thei": [0, 3, 5], "written": [0, 1, 4, 5, 10], "format": [0, 1, 4, 5, 6], "defin": [0, 5], "condit": 0, "test_command": 0, "insert": 0, "here": [0, 3, 5, 6, 15], "expected_result": 0, "environment_vari": 0, "requir": [0, 8], "IF": 0, "applic": 0, "perform_test": 0, "execution_result": 0, "arrai": 0, "name": [0, 3, 5, 10, 17], "messag": 0, "success": 0, "author": [0, 4, 5], "ross": 0, "mikulski": 0, "jonathan": [0, 10], "mikalov": [0, 10], "yuxi": 0, "ge": [0, 5], "yiqin": 0, "zhang": 0, "sprint": 1, "team": 1, "decid": 1, "shift": [1, 2], "focu": 1, "toward": 1, "comprehens": [1, 8], "document": [1, 4, 5, 6, 8, 11], "bring": 1, "collect": [1, 5], "cohes": 1, "effort": 1, "wa": [1, 5, 10, 11, 17], "part": [1, 4, 5, 11], "ongo": 1, "commit": 1, "open": [1, 2, 8], "educ": [1, 3, 8], "project": [1, 4, 6, 11], "recogn": 1, "clear": 1, "intern": 1, "broader": 1, "commun": 1, "One": 1, "repositori": 1, "dure": [1, 5, 8, 15], "find": [1, 4, 10], "github": [1, 3, 4, 6, 11, 17], "link": [1, 3, 4, 6], "serv": [1, 2, 8], "central": 1, "hub": 1, "edit": 1, "contribut": [1, 11], "To": [1, 5, 8], "member": 1, "follow": [1, 4, 5, 6, 8, 11], "step": [1, 8, 11], "clone": 1, "git": [1, 3], "rkulski": 1, "lab": [1, 4, 5, 14], "termin": 1, "friendli": 1, "gui": 1, "web": [1, 6], "browser": 1, "relev": 1, "subdirectori": 1, "after": [1, 8, 11], "complet": [1, 5, 8], "chang": [1, 2, 4, 5], "make": [1, 4], "build": [1, 3, 5, 6, 11, 14, 15, 17], "pub": [1, 3, 4, 5], "your": [1, 3, 4, 5, 6, 11], "reflect": 1, "websit": 1, "By": [1, 8], "togeth": 1, "dedic": 1, "ourselv": 1, "aim": 1, "provid": [1, 3, 4, 6, 11], "valuabl": 1, "resourc": 1, "align": [1, 5], "knowledg": 1, "share": [1, 5], "introduct": 1, "riya": 1, "deokar": 1, "featur": [2, 4, 5, 8], "yet": 2, "product": [2, 5], "readi": 2, "reason": [2, 5, 6], "doesn": [2, 6, 14], "t": [0, 2, 3, 4, 5, 6, 14, 17], "larg": [2, 4, 5], "volum": 2, "concurr": [2, 3], "request": [2, 3], "i": [2, 3, 4, 5, 11], "vm": [2, 3], "cannot": [2, 4, 5, 6], "100": [2, 5], "student": [2, 3], "submit": 2, "right": [2, 5], "befor": [2, 5], "deadlin": 2, "store": [2, 5, 11], "privat": [2, 3], "gradescop": [2, 3], "autograd": [2, 3], "fulli": [2, 5, 6], "want": [2, 3, 5, 6, 11], "problem": [2, 3, 4, 5], "list": [2, 11, 15], "abov": [2, 5, 11], "over": [2, 3, 5], "next": [2, 5], "month": 2, "solut": [2, 3], "first": [2, 5, 8], "plan": 2, "adapt": 2, "framework": [2, 3], "red": [2, 11], "hat": [2, 5, 11], "spawn": 2, "an": [2, 3, 4, 5, 10, 12, 15], "onlin": [2, 4], "test": [2, 3, 10, 12, 13, 14, 15, 17], "scp": [2, 3], "back": [2, 3], "host": 2, "aw": 2, "openshift": 2, "port": [2, 4], "listen": 2, "incom": 2, "state": [2, 3, 5], "wai": [2, 4, 5], "rather": [2, 3, 5], "other": [2, 3, 4, 5, 6, 10], "around": 2, "arriv": 2, "proper": [2, 4, 5], "certif": 2, "sign": 2, "ca": 2, "design": [2, 3, 5], "class": [2, 3, 5, 6], "figur": [2, 5, 6], "out": [2, 5], "how": [2, 4, 5, 11], "level": [2, 5], "granular": 2, "correspond": [2, 3, 4, 5, 11], "code": [2, 3, 4, 5, 6, 8, 11], "send": [2, 3], "note": [2, 3, 5], "brainstorm": 2, "someth": [2, 5], "could": 2, "said": 2, "about": [2, 5], "risk": 2, "howev": [2, 5, 6, 17], "alreadi": [2, 3], "secuirti": 2, "vulner": [2, 11], "repo": [3, 6, 11], "python": [3, 5, 6, 8], "layout": 3, "export": 3, "node": 3, "kernel": [3, 5], "program": [3, 5], "write": [3, 5, 6, 11], "assign": 3, "break": 3, "incompat": 3, "between": [3, 5], "than": [3, 5, 6], "whole": [3, 5], "even": [3, 15], "simpli": [3, 5], "ssh": 3, "custom": [3, 5, 6], "publish": [3, 4, 11], "offer": [3, 6], "great": [3, 6], "flexibl": 3, "especi": 3, "those": [3, 5], "sinc": [3, 5, 8, 10, 15], "runtim": 3, "much": 3, "eas": 3, "adopt": [3, 4], "so": [3, 4, 5, 6], "professor": 3, "gener": [3, 5, 10], "start": [3, 14], "world": 3, "diagram": 3, "refer": [3, 5], "nerc": 3, "england": 3, "research": [3, 8], "cloud": 3, "up": [3, 5, 10, 14], "ani": [3, 5, 6, 8], "id_ed25519": 3, "put": [3, 6, 17], "content": [3, 4, 6, 8], "public": [3, 5], "cat": 3, "insid": [3, 4, 5, 6, 10], "authorized_kei": 3, "real_run_autograd": 3, "real_setup": 3, "onc": [3, 4, 5], "log": [3, 5], "a282": 3, "container_id": 3, "docker": [3, 12], "dv": 3, "pwd": 3, "home": 3, "autograder_": 3, "email": 3, "should": 3, "replac": 3, "imag": [3, 5, 6, 10, 11, 12, 13, 17], "id": 3, "assum": 3, "pull": 3, "onto": 3, "zip": 3, "script": [3, 8, 17], "ignor": 3, "unecessari": 3, "g": [3, 4, 5, 6, 11], "directori": [3, 4, 5, 10], "minim": [3, 5], "number": [3, 5, 6], "sake": 3, "effici": [3, 8], "framwork": 3, "differ": [3, 5, 8], "upon": [3, 4, 5, 6], "copi": [3, 4], "creat": [3, 4, 5, 6, 8], "uniqu": [3, 4], "student_id": 3, "subsequ": 3, "delet": 3, "push": [3, 11], "due": [3, 5], "submiss": 3, "gradescope_util": 3, "check_submitted_fil": 3, "latter": 3, "locat": [3, 8], "wasn": 3, "big": 3, "issu": [3, 4, 8], "though": [3, 15], "remov": [3, 15], "test_fil": 3, "screenshot": [3, 6, 8], "At": 3, "end": [3, 5], "clean": 3, "The": [4, 5, 6, 8, 10, 11, 15], "face": [4, 5], "plugin": [4, 6], "pdfcrop": [4, 5, 6], "cli": 4, "tool": [4, 5, 6, 8], "crop": [4, 6], "tweak": 4, "render": [4, 5, 6], "page": [4, 5, 6, 8, 10], "contigu": 4, "enlarg": 4, "There": [4, 11], "involv": [4, 8], "adjust": 4, "xml": 4, "header": 4, "jupytexmag": [4, 5], "prepend": 4, "each": [4, 5, 11], "svg": [4, 5, 6], "fix": 4, "automat": 4, "tag": [4, 13], "tex": [4, 5, 6], "hide": 4, "input": [4, 5], "sourc": [4, 6], "hidden": [4, 5], "compil": [4, 5, 6], "do": [4, 5, 6], "shouldn": 4, "too": 4, "hard": 4, "incorpor": 4, "fine": [4, 6], "book": [4, 6], "when": [4, 5, 6], "displai": [4, 5, 6, 8, 17], "platform": [4, 8], "glyph": 4, "size": [4, 17], "thrown": 4, "disarrai": 4, "text": [4, 5, 6], "vari": 4, "across": [4, 5, 8], "Not": 4, "sure": 4, "isn": [4, 17], "relat": [4, 5, 6], "d": [4, 5], "like": [4, 5, 6, 8, 11], "develop": [4, 5], "latex": [4, 5, 6], "would": 4, "immensli": 4, "power": [4, 5], "avenu": 4, "click": [4, 8], "button": [4, 8], "almost": 4, "scientif": 4, "paper": 4, "peopl": 4, "easili": 4, "exponenti": 4, "increas": [4, 5], "worldwid": 4, "oper": [4, 8], "entir": 4, "tree": 4, "new_book": 4, "metadata": [4, 11], "conent": 4, "booknam": 4, "_toc": 4, "yml": [4, 10, 11, 15], "specifi": [4, 15], "leav": 4, "allow": [4, 5, 6], "anoth": [4, 5], "enjoi": 4, "view": [4, 6], "pip": [5, 6, 8], "load_ext": [5, 6], "fun": 5, "place": [5, 6], "top": [5, 6], "texdebug": [5, 6], "magic": [5, 6], "pdflatex": [5, 6], "purpos": [5, 6, 8, 17], "satisfi": [], "site": 5, "restart": 5, "updat": 5, "titl": 5, "9": [0, 5], "neural": 5, "network": 5, "artifici": 5, "intellig": 5, "date": [5, 10], "usepackag": 5, "amsmath": 5, "amsfont": 5, "mathtool": 5, "graphicx": 5, "siunitx": 5, "v2": 5, "physic": 5, "dvipsnam": 5, "xcolor": 5, "caption": 5, "float": 5, "pgfplot": 5, "geometri": 5, "paperwidth": 5, "7in": 5, "paperheight": 5, "100in": 5, "margin": [5, 6], "1in": [5, 6], "pgfplotsset": 5, "18": 5, "inkscapelatex": 5, "declarepaireddelimit": 5, "ceil": 5, "lceil": 5, "rceil": 5, "floor": 5, "lfloor": 5, "rfloor": 5, "declaremathoper": 5, "argmax": 5, "arg": 5, "max": 5, "argmin": 5, "min": 5, "newcommand": 5, "df": [0, 5], "textcolor": 5, "navyblu": 5, "textbf": 5, "declarecaptionformat": 5, "textit": 5, "small": 5, "captionsetup": 5, "commma": 5, "instead": [5, 11], "period": 5, "si": 5, "unit": 5, "sisetup": 5, "decim": 5, "marker": 5, "glossari": 5, "begin": 5, "maketitl": 5, "tablecont": 5, "section": [5, 6, 11], "subsect": 5, "what": [5, 6], "thought": 5, "let": 5, "take": [5, 8], "closer": 5, "look": 5, "brain": 5, "understand": 5, "philosophi": 5, "behind": 5, "As": 5, "visual": [5, 8, 11], "flamingo": 5, "paus": 5, "moment": 5, "read": 5, "think": 5, "come": 5, "my": 5, "mind": 5, "A": [5, 8, 11], "pink": 5, "black": 5, "tip": 5, "its": [5, 8], "beak": 5, "travel": 5, "pack": 5, "tall": 5, "nimbl": 5, "leg": 5, "order": 5, "ink": 5, "word": 5, "process": [5, 8], "mean": 5, "while": [5, 6], "simultan": 5, "sentenc": 5, "Then": [5, 6], "reach": 5, "memori": 5, "bank": 5, "recal": 5, "everyth": 5, "took": [5, 17], "data": [5, 8], "activ": [5, 8], "region": 5, "abstract": 5, "help": 5, "billion": 5, "neuron": 5, "caus": [5, 15], "footnot": 5, "human": 5, "86": 5, "total": 5, "veri": 5, "short": 5, "less": [5, 6], "milimet": 5, "length": 5, "meter": 5, "sai": 5, "li": 5, "continu": 5, "dormant": 5, "formal": 5, "equat": 5, "label": 5, "eq": 5, "a_i": 5, "mathbb": 5, "furthermor": 5, "neighbor": 5, "affect": 5, "cf": 5, "markov": 5, "chain": 5, "ask": 5, "question": 5, "again": 5, "ll": 5, "similar": [5, 6], "might": 5, "time": [5, 8, 17], "therefor": 5, "certain": 5, "reduc": 5, "strengthen": 5, "b": 5, "associ": 5, "scalar": 5, "w_": 5, "ab": 5, "strength": 5, "borrow": 5, "notat": 5, "eqref": 5, "model": 5, "weight": 5, "land": 5, "w_1a_1": 5, "w_2a_2": 5, "ldot": 5, "w_na_n": 5, "linear": 5, "combin": 5, "dc": 5, "multipli": 5, "quit": 5, "see": [5, 6, 11, 12], "why": [5, 11], "definit": [5, 6], "incomplet": 5, "well": 5, "previou": 5, "came": 5, "conclus": 5, "equal": 5, "constrict": 5, "capabl": [5, 6], "consid": 5, "answer": 5, "linearli": 5, "decis": 5, "boundari": 5, "hyperplan": 5, "onli": 5, "convex": 5, "hull": 5, "overlap": 5, "everi": 5, "relationship": 5, "abil": [5, 6, 8], "limit": 5, "hypersurfac": 5, "dimension": 5, "point": 5, "side": 5, "belong": 5, "second": 5, "subspac": 5, "dimens": 5, "space": 5, "occupi": 5, "repres": 5, "For": [5, 6, 10, 11], "hyper": 5, "plane": 5, "express": 5, "equival": 5, "dot": 5, "vector": 5, "combo": 5, "bmatrix": 5, "w_1": 5, "w_2": 5, "vdot": 5, "w_n": 5, "cdot": 5, "a_1": 5, "a_2": 5, "mathbf": 5, "a_n": 5, "gradient": 5, "respect": 5, "evalu": 5, "sum": [5, 10], "neihgbor": 5, "just": [5, 6], "constant": 5, "c": [5, 10], "nabla_": 5, "pdv": 5, "5em": 5, "variabl": [5, 6], "bound": 5, "therebi": 5, "degre": 5, "freedom": 5, "know": 5, "rate": 5, "ref": 5, "fig": 5, "sep": 5, "show": 5, "non": 5, "clearli": 5, "current": 5, "h": 5, "center": 5, "centerlin": 5, "includesvg": 5, "width": [5, 6], "75": 5, "columnwidth": 5, "linear_separ": 5, "dataset": 5, "color": 5, "cyan": 5, "blue": 5, "left": 5, "convex_hul": 5, "edg": 5, "drawn": 5, "angl": 5, "180": 5, "area": 5, "maxim": 5, "concav": 5, "But": 5, "determin": 5, "without": [5, 8], "draw": 5, "smallest": 5, "shape": 5, "enclos": 5, "more": [5, 11], "convex_overlap": 5, "graph": 5, "now": 5, "miss": [5, 15], "compon": 5, "curv": 5, "being": 5, "function": 5, "perceptron": 5, "preactiv": 5, "z": 5, "deriv": 5, "multipl": 5, "z_i": 5, "real": [5, 8], "a_1w_1": 5, "a_2w_2": 5, "a_nw_n": 5, "where": [5, 11, 15], "taylor": 5, "seri": [5, 11], "infinit": 5, "differenti": 5, "x": 5, "station": 5, "formula": 5, "frac": 5, "th": 5, "expans": 5, "sin": 5, "tikzpictur": [5, 6], "axi": 5, "grid": 5, "major": [5, 6], "xmin": 5, "xmax": 5, "middl": 5, "ymin": 5, "ymax": 5, "y": 5, "sampl": 5, "domain": 5, "legend": 5, "style": 5, "98": 5, "addplot": 5, "mark": 5, "cerulean": 5, "ultra": 5, "thick": 5, "deg": 5, "yelloworang": 5, "brown": 5, "skyblu": 5, "120": 5, "magenta": 5, "5040": 5, "t_1": 5, "t_3": 5, "t_5": 5, "polynomi": 5, "orang": 5, "teal": 5, "notic": 5, "strai": 5, "further": [5, 11], "approxim": 5, "becom": 5, "accur": [5, 8], "approach": 5, "infin": 5, "inaccuraci": 5, "iron": 5, "infti": 5, "stimulu": 5, "propag": 5, "fanci": 5, "spread": 5, "throughout": 5, "mush": 5, "stretch": 5, "map": 5, "stimuli": 5, "desir": 5, "binari": 5, "classif": 5, "layer": 5, "classifi": 5, "l": 5, "whether": 5, "digit": 5, "analog": 5, "fundament": 5, "block": 5, "made": [5, 10], "row": 5, "m": 5, "a_r": 5, "w_r": 5, "b_r": 5, "bia": 5, "consist": 5, "perform": [5, 8], "element": [5, 8], "half": 5, "a_m": 5, "r1": 5, "r2": 5, "z_r": 5, "denot": 5, "discuss": 5, "mani": 5, "alon": 5, "captur": [5, 8], "appli": 5, "transform": 5, "obtain": [5, 8], "talk": 5, "sigmoid": 5, "halv": 5, "a_l": 5, "sigma": 5, "assembl": 5, "organ": 5, "receiv": 5, "shown": 5, "nn": 5, "given": 5, "dark": 5, "matrix": 5, "modifi": 5, "train": 5, "loss": 5, "codomain": 5, "column": 5, "11": 5, "21": 5, "n1": 5, "12": 5, "22": 5, "n2": 5, "1m": 5, "2m": 5, "nm": 5, "bungu": 5, "pre": 5, "must": [5, 8], "transpos": 5, "seen": 5, "la_1": 5, "la_2": 5, "la_m": 5, "z_1": 5, "z_2": 5, "z_n": 5, "algebra": 5, "analysi": [5, 11], "times1": 5, "appear": 5, "box": 5, "somehow": 5, "picasso": 5, "plai": 5, "chess": 5, "better": 5, "magnu": 5, "carlsen": 5, "simpl": 5, "prompt": 5, "examin": [5, 8], "realiz": 5, "mathcal": 5, "rightarrow": 5, "learn": [5, 8], "subset": [5, 15], "pair": 5, "symbol": 5, "rightharpoonup": 5, "measur": 5, "discrep": [5, 8], "iter": 5, "argmin_w": 5, "old": 5, "alpha": 5, "nabla_w": 5, "eventu": 5, "decreas": 5, "zero": 5, "converg": 5, "equilibrium": 5, "stop": [5, 14], "machin": 5, "fall": 5, "epsilon": 5, "form": 5, "choos": 5, "good": 5, "somewher": 5, "bind": 5, "logist": 5, "monoton": 5, "Its": 5, "expens": 5, "calcul": [5, 10], "expon": 5, "suscept": 5, "vanish": 5, "known": 5, "horizont": 5, "asymptot": 5, "never": 5, "declar": 5, "exp": 5, "sigmap": 5, "bottom": 5, "ytick": 5, "25": 5, "25z": 5, "plot": 5, "remain": 5, "drawback": 5, "computation": 5, "backpropag": 5, "w_t": 5, "j": 5, "tanhmap": 5, "tanh": 5, "swish": 5, "swishmap": 5, "swishdoublemap": 5, "4": [0, 5], "relu": 5, "55": 5, "leakyrelu": 5, "batch": 5, "descent": 5, "optim": 5, "newtonian": 5, "method": 5, "often": 5, "produc": 5, "wrong": 5, "pdftex": 5, "version": [5, 8, 10, 15], "141592653": 5, "40": 5, "live": 5, "2023": 5, "homebrew": 5, "preload": 5, "write18": 5, "enter": 5, "extend": [5, 8], "mode": [5, 8], "folder": [0, 5], "x1": 5, "frlndvdd2158sbgrcspfnv_w0000gn": 5, "tmpoy95caej": [], "temp": 5, "latex2": 5, "2022": 5, "01": 5, "patch": 5, "l3": 5, "02": 5, "opt": 5, "cellar": 5, "texliv": 5, "20230313_2": 5, "texmf": 5, "dist": 5, "standalon": [5, 6], "cl": 5, "v1": 5, "3b": 5, "sub": 5, "stan": 5, "dalon": 5, "esc": 5, "sty": 5, "iftex": 5, "ifl": 5, "uatex": 5, "ift": 5, "ex": 5, "xkeyval": 5, "xke": 5, "yval": 5, "keyval": 5, "kvutil": 5, "k": 5, "eyval": 5, "cfg": 5, "articl": 5, "07": 5, "4n": 5, "standard": [5, 6, 8], "size10": 5, "clo": 5, "varwidth": [5, 6], "va": 5, "rwidth": 5, "l3backend": 5, "3backend": 5, "aux": 5, "undefin": 5, "manual": 5, "companion": 5, "explan": 5, "type": [5, 10], "immedi": 5, "emerg": 5, "fatal": 5, "occur": 5, "pdf": [5, 6], "transcript": 5, "tmpoy95c": [], "aej": [], "get_ipython": 5, "run_cell_mag": 5, "ipython": [5, 6], "core": 5, "interactiveshel": 5, "2493": 5, "magic_nam": 5, "2491": 5, "builtin_trap": 5, "2492": 5, "magic_arg_": 5, "fn": 5, "kwarg": 5, "2495": 5, "prevent": 5, "2496": 5, "decor": 5, "output_can_be_silenc": 5, "2497": 5, "token": [5, 8], "2498": 5, "getattr": 5, "magic_output_can_be_silenc": 5, "jupytex": [5, 6], "52": 5, "pagenumb": [5, 6], "gobbl": [5, 6], "53": 5, "escap": 5, "tmpdir": 5, "tex_path": 5, "56": 5, "pdf_path": 5, "58": 5, "svg_path": 5, "526": 5, "capture_output": 5, "timeout": 5, "popenarg": 5, "524": 5, "retcod": 5, "poll": 5, "525": 5, "527": 5, "528": 5, "completedprocess": 5, "exit": 5, "forgot": 5, "tmprdas989x": 5, "am": 5, "math": 5, "inform": [5, 8, 11], "option": 5, "gen": 5, "bsy": 5, "opn": 5, "font": 5, "dmap": 5, "warn": 5, "rerun": 5, "cross": 5, "type1": 5, "cm": 5, "cmbx10": 5, "pfb": 5, "di": 5, "cmbx7": 5, "202303": 5, "13_2": 5, "cmex10": 5, "cmmi1": 5, "lic": 5, "cmmi7": 5, "cmr10": 5, "202": 5, "30313_2": 5, "cmr7": 5, "cmsy": 5, "70394": 5, "byte": 5, "tmprdas9": 5, "89x": 5, "2020": 5, "06": 5, "copyright": 5, "2002": 5, "heiko": 5, "oberdiek": 5, "support": [5, 8], "nativ": 6, "mathjax": 6, "markdown": 6, "complex": [6, 8], "dynam": 6, "sacrif": 6, "beauti": 6, "coupl": 6, "pypi": 6, "modul": [0, 5, 6], "afterward": 6, "pdf2svg": 6, "convert": [6, 8], "fast": 6, "upsid": 6, "javascript": 6, "lose": 6, "zoom": 6, "highlight": 6, "cursor": 6, "normal": 6, "png": 6, "jpeg": 6, "getting_start": 6, "chapter": [6, 11], "exampl": [6, 12, 15], "height": 6, "documentclass": 6, "turn": 6, "off": 6, "contin": 6, "debug": [6, 17], "jupyternotebook": 6, "jupyterlab": [6, 8, 15], "upload": [6, 17], "ruin": 6, "attach": 6, "scale": 6, "maximum": 6, "fair": 6, "trade": 6, "64": 10, "charact": 10, "hash": 10, "compar": [8, 10], "local": 10, "proc": 10, "prune": 10, "exec": 10, "stat": 10, "lc_all": 10, "sort": 10, "sha256sum": 10, "cut": 10, "travers": 10, "through": [10, 11], "exclud": 10, "permiss": [8, 10], "event": 10, "failur": 10, "pleas": 10, "latest": 10, "directrori": 10, "modif": 10, "been": 10, "workflow": [8, 11, 15, 17], "registri": 11, "final": 11, "parallel": 11, "runner": 11, "quai": 11, "io": 11, "trigger": [8, 11], "offici": 11, "successfulli": [5, 8, 11], "benefit": 11, "go": 11, "detail": 11, "own": 11, "infrastructur": 11, "mach": 13, "frozen": 15, "resolv": 15, "txt": [15, 17], "mamba": 15, "setup": [15, 17], "stage": [8, 15], "logic": 15, "version_check": 15, "mismatch": [8, 15], "cancel": 15, "myst": 15, "artifact": 17, "under": 17, "extract": 17, "tmpjymr51kr": [], "tmpjymr5": [], "1kr": [], "tmptlud1b0t": [], "tmptlud1": [], "b0t": [], "tmp9xo_y6m0": [], "tmp9xo_i": [], "6m0": [], "vqrt_6yx3f962pmw8c8mwxyw0000gn": [0, 5], "ipykernel_79547": 0, "3757027472": 0, "anaconda3": [0, 5], "download": 5, "py2": 5, "py3": 5, "whl": 5, "kb": 5, "modulenotfounderror": 5, "ipykernel_79555": 5, "245863205": 5, "run_line_mag": 5, "__init__": 5, "__version__": 5, "load_ipython_extens": 5, "cell_mag": 5, "line_cell_mag": 5, "pypdf2": 5, "pdfreader": 5, "tempfil": 5, "tmp9lgqkope": 5, "tmp9lgqk": 5, "primari": 8, "interfac": 8, "rigor": 8, "essenti": 8, "accuraci": 8, "reliabl": 8, "analyt": 8, "correctli": 8, "integr": 8, "seamlessli": 8, "variou": 8, "librari": 8, "addition": 8, "emploi": 8, "slideshow": 8, "enhanc": 8, "interact": 8, "present": 8, "wide": 8, "profession": 8, "analys": 8, "crucial": 8, "intend": 8, "effect": 8, "convei": 8, "overal": 8, "specif": 8, "via": 8, "necessari": 8, "conda": 8, "convers": 8, "verif": 8, "smooth": 8, "stabil": 8, "assess": 8, "vital": 8, "avoid": 8, "potenti": 8, "aris": 8, "instabl": 8, "free": 8, "guarante": 8, "practic": 8, "seamless": 8, "experi": 8, "thorough": 8, "high": 8, "directli": 8, "jupyterlab_ris": 8, "depend": 8, "instanc": 8, "selenium": 8, "simul": 8, "retriev": 8, "launcher": 8, "launch": 8, "icon": 8, "comparison": 8, "proce": 8, "doubl": 8, "taken": 8, "fullscreen": 8, "search": 8, "three": 8}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"environment_test": 0, "write": 0, "permiss": 0, "home": 0, "directori": 0, "test": [0, 8, 11], "environment": 0, "variabl": 0, "network": 0, "pip": 0, "conda": 0, "git": 0, "ssh": 0, "enhanc": 1, "op": 1, "extens": [2, 4], "current": [2, 4, 6], "limit": [2, 4, 6], "futur": [2, 4], "direct": 2, "address": 2, "secur": 2, "scale": 2, "gradescope_autograd": 3, "architectur": [3, 11], "configur": 3, "exampl": [3, 5, 11], "run": [3, 5, 11], "getting_start": 5, "debug": 5, "fix": 5, "error": 5, "jupytexmag": 6, "how": [6, 8], "doe": 6, "work": 6, "usag": 6, "miscellan": 7, "approv": 9, "checksum": 10, "container_test": 11, "overview": 11, "diagram": 11, "action": 11, "health": 12, "valiat": 12, "true": [12, 14, 15], "posit": [12, 14, 15], "image_vers": 13, "jupyter_notebook": 14, "valid": [14, 15], "package_vers": 15, "proper": 15, "neg": 15, "publish": 16, "size_and_tim": 17, "ui": 18, "rise": 8, "why": 8, "what": 8, "set": 8, "up": 8, "jupyt": 8, "lab": 8, "instal": 8, "function": 8, "local": 8}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})